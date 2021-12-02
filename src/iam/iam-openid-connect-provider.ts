// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Identity and Access Management
*/
export interface IamOpenidConnectProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#client_id_list IamOpenidConnectProvider#client_id_list}
  */
  readonly clientIdList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#tags IamOpenidConnectProvider#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#tags_all IamOpenidConnectProvider#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#thumbprint_list IamOpenidConnectProvider#thumbprint_list}
  */
  readonly thumbprintList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#url IamOpenidConnectProvider#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider}
*/
export class IamOpenidConnectProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iam_openid_connect_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamOpenidConnectProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IamOpenidConnectProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_openid_connect_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientIdList = config.clientIdList;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._thumbprintList = config.thumbprintList;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_id_list - computed: false, optional: false, required: true
  private _clientIdList?: string[]; 
  public get clientIdList() {
    return this.getListAttribute('client_id_list');
  }
  public set clientIdList(value: string[]) {
    this._clientIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdListInput() {
    return this._clientIdList;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // thumbprint_list - computed: false, optional: false, required: true
  private _thumbprintList?: string[]; 
  public get thumbprintList() {
    return this.getListAttribute('thumbprint_list');
  }
  public set thumbprintList(value: string[]) {
    this._thumbprintList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintListInput() {
    return this._thumbprintList;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id_list: cdktf.listMapper(cdktf.stringToTerraform)(this._clientIdList),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      thumbprint_list: cdktf.listMapper(cdktf.stringToTerraform)(this._thumbprintList),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
