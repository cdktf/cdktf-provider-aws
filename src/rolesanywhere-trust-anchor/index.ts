// https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RolesanywhereTrustAnchorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#enabled RolesanywhereTrustAnchor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#id RolesanywhereTrustAnchor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#name RolesanywhereTrustAnchor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#tags RolesanywhereTrustAnchor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#tags_all RolesanywhereTrustAnchor#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#source RolesanywhereTrustAnchor#source}
  */
  readonly source: RolesanywhereTrustAnchorSource;
}
export interface RolesanywhereTrustAnchorSourceSourceData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#acm_pca_arn RolesanywhereTrustAnchor#acm_pca_arn}
  */
  readonly acmPcaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#x509_certificate_data RolesanywhereTrustAnchor#x509_certificate_data}
  */
  readonly x509CertificateData?: string;
}

export function rolesanywhereTrustAnchorSourceSourceDataToTerraform(struct?: RolesanywhereTrustAnchorSourceSourceDataOutputReference | RolesanywhereTrustAnchorSourceSourceData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm_pca_arn: cdktf.stringToTerraform(struct!.acmPcaArn),
    x509_certificate_data: cdktf.stringToTerraform(struct!.x509CertificateData),
  }
}

export class RolesanywhereTrustAnchorSourceSourceDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RolesanywhereTrustAnchorSourceSourceData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmPcaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmPcaArn = this._acmPcaArn;
    }
    if (this._x509CertificateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509CertificateData = this._x509CertificateData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RolesanywhereTrustAnchorSourceSourceData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acmPcaArn = undefined;
      this._x509CertificateData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acmPcaArn = value.acmPcaArn;
      this._x509CertificateData = value.x509CertificateData;
    }
  }

  // acm_pca_arn - computed: false, optional: true, required: false
  private _acmPcaArn?: string; 
  public get acmPcaArn() {
    return this.getStringAttribute('acm_pca_arn');
  }
  public set acmPcaArn(value: string) {
    this._acmPcaArn = value;
  }
  public resetAcmPcaArn() {
    this._acmPcaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmPcaArnInput() {
    return this._acmPcaArn;
  }

  // x509_certificate_data - computed: false, optional: true, required: false
  private _x509CertificateData?: string; 
  public get x509CertificateData() {
    return this.getStringAttribute('x509_certificate_data');
  }
  public set x509CertificateData(value: string) {
    this._x509CertificateData = value;
  }
  public resetX509CertificateData() {
    this._x509CertificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertificateDataInput() {
    return this._x509CertificateData;
  }
}
export interface RolesanywhereTrustAnchorSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#source_type RolesanywhereTrustAnchor#source_type}
  */
  readonly sourceType: string;
  /**
  * source_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor#source_data RolesanywhereTrustAnchor#source_data}
  */
  readonly sourceData: RolesanywhereTrustAnchorSourceSourceData;
}

export function rolesanywhereTrustAnchorSourceToTerraform(struct?: RolesanywhereTrustAnchorSourceOutputReference | RolesanywhereTrustAnchorSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    source_data: rolesanywhereTrustAnchorSourceSourceDataToTerraform(struct!.sourceData),
  }
}

export class RolesanywhereTrustAnchorSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RolesanywhereTrustAnchorSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._sourceData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceData = this._sourceData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RolesanywhereTrustAnchorSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceType = undefined;
      this._sourceData.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceType = value.sourceType;
      this._sourceData.internalValue = value.sourceData;
    }
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // source_data - computed: false, optional: false, required: true
  private _sourceData = new RolesanywhereTrustAnchorSourceSourceDataOutputReference(this, "source_data");
  public get sourceData() {
    return this._sourceData;
  }
  public putSourceData(value: RolesanywhereTrustAnchorSourceSourceData) {
    this._sourceData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataInput() {
    return this._sourceData.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor aws_rolesanywhere_trust_anchor}
*/
export class RolesanywhereTrustAnchor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rolesanywhere_trust_anchor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_trust_anchor aws_rolesanywhere_trust_anchor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RolesanywhereTrustAnchorConfig
  */
  public constructor(scope: Construct, id: string, config: RolesanywhereTrustAnchorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rolesanywhere_trust_anchor',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // source - computed: false, optional: false, required: true
  private _source = new RolesanywhereTrustAnchorSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: RolesanywhereTrustAnchorSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      source: rolesanywhereTrustAnchorSourceToTerraform(this._source.internalValue),
    };
  }
}
