/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAcmCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate#domain DataAwsAcmCertificate#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate#id DataAwsAcmCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate#key_types DataAwsAcmCertificate#key_types}
  */
  readonly keyTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate#most_recent DataAwsAcmCertificate#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate#region DataAwsAcmCertificate#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate#statuses DataAwsAcmCertificate#statuses}
  */
  readonly statuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate#tags DataAwsAcmCertificate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate#types DataAwsAcmCertificate#types}
  */
  readonly types?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate aws_acm_certificate}
*/
export class DataAwsAcmCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_acm_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsAcmCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsAcmCertificate to import
  * @param importFromId The id of the existing DataAwsAcmCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsAcmCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_acm_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/acm_certificate aws_acm_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAcmCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsAcmCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_acm_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._keyTypes = config.keyTypes;
    this._mostRecent = config.mostRecent;
    this._region = config.region;
    this._statuses = config.statuses;
    this._tags = config.tags;
    this._types = config.types;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // key_types - computed: false, optional: true, required: false
  private _keyTypes?: string[]; 
  public get keyTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('key_types'));
  }
  public set keyTypes(value: string[]) {
    this._keyTypes = value;
  }
  public resetKeyTypes() {
    this._keyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypesInput() {
    return this._keyTypes;
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }

  // tags - computed: true, optional: true, required: false
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

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      key_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyTypes),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      region: cdktf.stringToTerraform(this._region),
      statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._statuses),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._types),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statuses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._statuses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._types),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
