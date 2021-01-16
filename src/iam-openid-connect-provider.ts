// https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamOpenidConnectProviderConfig extends cdktf.TerraformMetaArguments {
  readonly clientIdList: string[];
  readonly thumbprintList: string[];
  readonly url: string;
}

// Resource

export class IamOpenidConnectProvider extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _clientIdList: string[];
  public get clientIdList() {
    return this.getListAttribute('client_id_list');
  }
  public set clientIdList(value: string[]) {
    this._clientIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdListInput() {
    return this._clientIdList
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // thumbprint_list - computed: false, optional: false, required: true
  private _thumbprintList: string[];
  public get thumbprintList() {
    return this.getListAttribute('thumbprint_list');
  }
  public set thumbprintList(value: string[]) {
    this._thumbprintList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintListInput() {
    return this._thumbprintList
  }

  // url - computed: false, optional: false, required: true
  private _url: string;
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id_list: cdktf.listMapper(cdktf.stringToTerraform)(this._clientIdList),
      thumbprint_list: cdktf.listMapper(cdktf.stringToTerraform)(this._thumbprintList),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
