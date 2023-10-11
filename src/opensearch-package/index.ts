// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package#id OpensearchPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}
  */
  readonly packageDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}
  */
  readonly packageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}
  */
  readonly packageType: string;
  /**
  * package_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package#package_source OpensearchPackage#package_source}
  */
  readonly packageSource: OpensearchPackagePackageSource;
}
export interface OpensearchPackagePackageSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package#s3_bucket_name OpensearchPackage#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package#s3_key OpensearchPackage#s3_key}
  */
  readonly s3Key: string;
}

export function opensearchPackagePackageSourceToTerraform(struct?: OpensearchPackagePackageSourceOutputReference | OpensearchPackagePackageSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
  }
}

export class OpensearchPackagePackageSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchPackagePackageSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchPackagePackageSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3BucketName = undefined;
      this._s3Key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3BucketName = value.s3BucketName;
      this._s3Key = value.s3Key;
    }
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key - computed: false, optional: false, required: true
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package aws_opensearch_package}
*/
export class OpensearchPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearch_package";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/opensearch_package aws_opensearch_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchPackageConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearch_package',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._packageDescription = config.packageDescription;
    this._packageName = config.packageName;
    this._packageType = config.packageType;
    this._packageSource.internalValue = config.packageSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_package_version - computed: true, optional: false, required: false
  public get availablePackageVersion() {
    return this.getStringAttribute('available_package_version');
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

  // package_description - computed: false, optional: true, required: false
  private _packageDescription?: string; 
  public get packageDescription() {
    return this.getStringAttribute('package_description');
  }
  public set packageDescription(value: string) {
    this._packageDescription = value;
  }
  public resetPackageDescription() {
    this._packageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageDescriptionInput() {
    return this._packageDescription;
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // package_name - computed: false, optional: false, required: true
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // package_source - computed: false, optional: false, required: true
  private _packageSource = new OpensearchPackagePackageSourceOutputReference(this, "package_source");
  public get packageSource() {
    return this._packageSource;
  }
  public putPackageSource(value: OpensearchPackagePackageSource) {
    this._packageSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageSourceInput() {
    return this._packageSource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      package_description: cdktf.stringToTerraform(this._packageDescription),
      package_name: cdktf.stringToTerraform(this._packageName),
      package_type: cdktf.stringToTerraform(this._packageType),
      package_source: opensearchPackagePackageSourceToTerraform(this._packageSource.internalValue),
    };
  }
}
