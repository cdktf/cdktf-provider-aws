// https://www.terraform.io/docs/providers/aws/r/quicksight_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}
  */
  readonly type: string;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credentials QuicksightDataSource#credentials}
  */
  readonly credentials?: QuicksightDataSourceCredentials;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#parameters QuicksightDataSource#parameters}
  */
  readonly parameters: QuicksightDataSourceParameters;
  /**
  * permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#permission QuicksightDataSource#permission}
  */
  readonly permission?: QuicksightDataSourcePermission[] | cdktf.IResolvable;
  /**
  * ssl_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#ssl_properties QuicksightDataSource#ssl_properties}
  */
  readonly sslProperties?: QuicksightDataSourceSslProperties;
  /**
  * vpc_connection_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}
  */
  readonly vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties;
}
export interface QuicksightDataSourceCredentialsCredentialPair {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}
  */
  readonly username: string;
}

export function quicksightDataSourceCredentialsCredentialPairToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairOutputReference | QuicksightDataSourceCredentialsCredentialPair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class QuicksightDataSourceCredentialsCredentialPairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface QuicksightDataSourceCredentials {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}
  */
  readonly copySourceArn?: string;
  /**
  * credential_pair block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credential_pair QuicksightDataSource#credential_pair}
  */
  readonly credentialPair?: QuicksightDataSourceCredentialsCredentialPair;
}

export function quicksightDataSourceCredentialsToTerraform(struct?: QuicksightDataSourceCredentialsOutputReference | QuicksightDataSourceCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_source_arn: cdktf.stringToTerraform(struct!.copySourceArn),
    credential_pair: quicksightDataSourceCredentialsCredentialPairToTerraform(struct!.credentialPair),
  }
}

export class QuicksightDataSourceCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copySourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.copySourceArn = this._copySourceArn;
    }
    if (this._credentialPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialPair = this._credentialPair?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._copySourceArn = undefined;
      this._credentialPair.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._copySourceArn = value.copySourceArn;
      this._credentialPair.internalValue = value.credentialPair;
    }
  }

  // copy_source_arn - computed: false, optional: true, required: false
  private _copySourceArn?: string; 
  public get copySourceArn() {
    return this.getStringAttribute('copy_source_arn');
  }
  public set copySourceArn(value: string) {
    this._copySourceArn = value;
  }
  public resetCopySourceArn() {
    this._copySourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copySourceArnInput() {
    return this._copySourceArn;
  }

  // credential_pair - computed: false, optional: true, required: false
  private _credentialPair = new QuicksightDataSourceCredentialsCredentialPairOutputReference(this, "credential_pair");
  public get credentialPair() {
    return this._credentialPair;
  }
  public putCredentialPair(value: QuicksightDataSourceCredentialsCredentialPair) {
    this._credentialPair.internalValue = value;
  }
  public resetCredentialPair() {
    this._credentialPair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialPairInput() {
    return this._credentialPair.internalValue;
  }
}
export interface QuicksightDataSourceParametersAmazonElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}
  */
  readonly domain: string;
}

export function quicksightDataSourceParametersAmazonElasticsearchToTerraform(struct?: QuicksightDataSourceParametersAmazonElasticsearchOutputReference | QuicksightDataSourceParametersAmazonElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export class QuicksightDataSourceParametersAmazonElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersAmazonElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersAmazonElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface QuicksightDataSourceParametersAthena {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}
  */
  readonly workGroup?: string;
}

export function quicksightDataSourceParametersAthenaToTerraform(struct?: QuicksightDataSourceParametersAthenaOutputReference | QuicksightDataSourceParametersAthena): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}

export class QuicksightDataSourceParametersAthenaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersAthena | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroup = this._workGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersAthena | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workGroup = value.workGroup;
    }
  }

  // work_group - computed: false, optional: true, required: false
  private _workGroup?: string; 
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup;
  }
}
export interface QuicksightDataSourceParametersAurora {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersAuroraToTerraform(struct?: QuicksightDataSourceParametersAuroraOutputReference | QuicksightDataSourceParametersAurora): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersAuroraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersAurora | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersAurora | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersAuroraPostgresql {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersAuroraPostgresqlToTerraform(struct?: QuicksightDataSourceParametersAuroraPostgresqlOutputReference | QuicksightDataSourceParametersAuroraPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersAuroraPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersAuroraPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersAuroraPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersAwsIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}
  */
  readonly dataSetName: string;
}

export function quicksightDataSourceParametersAwsIotAnalyticsToTerraform(struct?: QuicksightDataSourceParametersAwsIotAnalyticsOutputReference | QuicksightDataSourceParametersAwsIotAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_name: cdktf.stringToTerraform(struct!.dataSetName),
  }
}

export class QuicksightDataSourceParametersAwsIotAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersAwsIotAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetName = this._dataSetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersAwsIotAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSetName = value.dataSetName;
    }
  }

  // data_set_name - computed: false, optional: false, required: true
  private _dataSetName?: string; 
  public get dataSetName() {
    return this.getStringAttribute('data_set_name');
  }
  public set dataSetName(value: string) {
    this._dataSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetNameInput() {
    return this._dataSetName;
  }
}
export interface QuicksightDataSourceParametersJira {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}
  */
  readonly siteBaseUrl: string;
}

export function quicksightDataSourceParametersJiraToTerraform(struct?: QuicksightDataSourceParametersJiraOutputReference | QuicksightDataSourceParametersJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_base_url: cdktf.stringToTerraform(struct!.siteBaseUrl),
  }
}

export class QuicksightDataSourceParametersJiraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersJira | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteBaseUrl = this._siteBaseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersJira | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteBaseUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteBaseUrl = value.siteBaseUrl;
    }
  }

  // site_base_url - computed: false, optional: false, required: true
  private _siteBaseUrl?: string; 
  public get siteBaseUrl() {
    return this.getStringAttribute('site_base_url');
  }
  public set siteBaseUrl(value: string) {
    this._siteBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteBaseUrlInput() {
    return this._siteBaseUrl;
  }
}
export interface QuicksightDataSourceParametersMariaDb {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersMariaDbToTerraform(struct?: QuicksightDataSourceParametersMariaDbOutputReference | QuicksightDataSourceParametersMariaDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersMariaDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersMariaDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersMariaDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersMysql {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersMysqlToTerraform(struct?: QuicksightDataSourceParametersMysqlOutputReference | QuicksightDataSourceParametersMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersOracle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersOracleToTerraform(struct?: QuicksightDataSourceParametersOracleOutputReference | QuicksightDataSourceParametersOracle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersOracleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersOracle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersOracle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersPostgresql {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersPostgresqlToTerraform(struct?: QuicksightDataSourceParametersPostgresqlOutputReference | QuicksightDataSourceParametersPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersPresto {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersPrestoToTerraform(struct?: QuicksightDataSourceParametersPrestoOutputReference | QuicksightDataSourceParametersPresto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersPrestoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersPresto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersPresto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersRds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}
  */
  readonly instanceId: string;
}

export function quicksightDataSourceParametersRdsToTerraform(struct?: QuicksightDataSourceParametersRdsOutputReference | QuicksightDataSourceParametersRds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}

export class QuicksightDataSourceParametersRdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersRds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersRds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._instanceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._instanceId = value.instanceId;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface QuicksightDataSourceParametersRedshift {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceParametersRedshiftToTerraform(struct?: QuicksightDataSourceParametersRedshiftOutputReference | QuicksightDataSourceParametersRedshift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersRedshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersS3ManifestFileLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}
  */
  readonly key: string;
}

export function quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct?: QuicksightDataSourceParametersS3ManifestFileLocationOutputReference | QuicksightDataSourceParametersS3ManifestFileLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class QuicksightDataSourceParametersS3ManifestFileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersS3ManifestFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersS3ManifestFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface QuicksightDataSourceParametersS3 {
  /**
  * manifest_file_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}
  */
  readonly manifestFileLocation: QuicksightDataSourceParametersS3ManifestFileLocation;
}

export function quicksightDataSourceParametersS3ToTerraform(struct?: QuicksightDataSourceParametersS3OutputReference | QuicksightDataSourceParametersS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifest_file_location: quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct!.manifestFileLocation),
  }
}

export class QuicksightDataSourceParametersS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestFileLocation = this._manifestFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manifestFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manifestFileLocation.internalValue = value.manifestFileLocation;
    }
  }

  // manifest_file_location - computed: false, optional: false, required: true
  private _manifestFileLocation = new QuicksightDataSourceParametersS3ManifestFileLocationOutputReference(this, "manifest_file_location");
  public get manifestFileLocation() {
    return this._manifestFileLocation;
  }
  public putManifestFileLocation(value: QuicksightDataSourceParametersS3ManifestFileLocation) {
    this._manifestFileLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestFileLocationInput() {
    return this._manifestFileLocation.internalValue;
  }
}
export interface QuicksightDataSourceParametersServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}
  */
  readonly siteBaseUrl: string;
}

export function quicksightDataSourceParametersServiceNowToTerraform(struct?: QuicksightDataSourceParametersServiceNowOutputReference | QuicksightDataSourceParametersServiceNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_base_url: cdktf.stringToTerraform(struct!.siteBaseUrl),
  }
}

export class QuicksightDataSourceParametersServiceNowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteBaseUrl = this._siteBaseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteBaseUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteBaseUrl = value.siteBaseUrl;
    }
  }

  // site_base_url - computed: false, optional: false, required: true
  private _siteBaseUrl?: string; 
  public get siteBaseUrl() {
    return this.getStringAttribute('site_base_url');
  }
  public set siteBaseUrl(value: string) {
    this._siteBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteBaseUrlInput() {
    return this._siteBaseUrl;
  }
}
export interface QuicksightDataSourceParametersSnowflake {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}
  */
  readonly warehouse: string;
}

export function quicksightDataSourceParametersSnowflakeToTerraform(struct?: QuicksightDataSourceParametersSnowflakeOutputReference | QuicksightDataSourceParametersSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

export class QuicksightDataSourceParametersSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._warehouse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._warehouse = value.warehouse;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface QuicksightDataSourceParametersSpark {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersSparkToTerraform(struct?: QuicksightDataSourceParametersSparkOutputReference | QuicksightDataSourceParametersSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersSparkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersSpark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersSpark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersSqlServer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersSqlServerToTerraform(struct?: QuicksightDataSourceParametersSqlServerOutputReference | QuicksightDataSourceParametersSqlServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersSqlServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersSqlServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersSqlServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersTeradata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port: number;
}

export function quicksightDataSourceParametersTeradataToTerraform(struct?: QuicksightDataSourceParametersTeradataOutputReference | QuicksightDataSourceParametersTeradata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class QuicksightDataSourceParametersTeradataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersTeradata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersTeradata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceParametersTwitter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}
  */
  readonly maxRows: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}
  */
  readonly query: string;
}

export function quicksightDataSourceParametersTwitterToTerraform(struct?: QuicksightDataSourceParametersTwitterOutputReference | QuicksightDataSourceParametersTwitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_rows: cdktf.numberToTerraform(struct!.maxRows),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class QuicksightDataSourceParametersTwitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParametersTwitter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRows = this._maxRows;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParametersTwitter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRows = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRows = value.maxRows;
      this._query = value.query;
    }
  }

  // max_rows - computed: false, optional: false, required: true
  private _maxRows?: number; 
  public get maxRows() {
    return this.getNumberAttribute('max_rows');
  }
  public set maxRows(value: number) {
    this._maxRows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInput() {
    return this._maxRows;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface QuicksightDataSourceParameters {
  /**
  * amazon_elasticsearch block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}
  */
  readonly amazonElasticsearch?: QuicksightDataSourceParametersAmazonElasticsearch;
  /**
  * athena block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#athena QuicksightDataSource#athena}
  */
  readonly athena?: QuicksightDataSourceParametersAthena;
  /**
  * aurora block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora QuicksightDataSource#aurora}
  */
  readonly aurora?: QuicksightDataSourceParametersAurora;
  /**
  * aurora_postgresql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora_postgresql QuicksightDataSource#aurora_postgresql}
  */
  readonly auroraPostgresql?: QuicksightDataSourceParametersAuroraPostgresql;
  /**
  * aws_iot_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}
  */
  readonly awsIotAnalytics?: QuicksightDataSourceParametersAwsIotAnalytics;
  /**
  * jira block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#jira QuicksightDataSource#jira}
  */
  readonly jira?: QuicksightDataSourceParametersJira;
  /**
  * maria_db block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#maria_db QuicksightDataSource#maria_db}
  */
  readonly mariaDb?: QuicksightDataSourceParametersMariaDb;
  /**
  * mysql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#mysql QuicksightDataSource#mysql}
  */
  readonly mysql?: QuicksightDataSourceParametersMysql;
  /**
  * oracle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#oracle QuicksightDataSource#oracle}
  */
  readonly oracle?: QuicksightDataSourceParametersOracle;
  /**
  * postgresql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#postgresql QuicksightDataSource#postgresql}
  */
  readonly postgresql?: QuicksightDataSourceParametersPostgresql;
  /**
  * presto block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#presto QuicksightDataSource#presto}
  */
  readonly presto?: QuicksightDataSourceParametersPresto;
  /**
  * rds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#rds QuicksightDataSource#rds}
  */
  readonly rds?: QuicksightDataSourceParametersRds;
  /**
  * redshift block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#redshift QuicksightDataSource#redshift}
  */
  readonly redshift?: QuicksightDataSourceParametersRedshift;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#s3 QuicksightDataSource#s3}
  */
  readonly s3?: QuicksightDataSourceParametersS3;
  /**
  * service_now block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#service_now QuicksightDataSource#service_now}
  */
  readonly serviceNow?: QuicksightDataSourceParametersServiceNow;
  /**
  * snowflake block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#snowflake QuicksightDataSource#snowflake}
  */
  readonly snowflake?: QuicksightDataSourceParametersSnowflake;
  /**
  * spark block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#spark QuicksightDataSource#spark}
  */
  readonly spark?: QuicksightDataSourceParametersSpark;
  /**
  * sql_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#sql_server QuicksightDataSource#sql_server}
  */
  readonly sqlServer?: QuicksightDataSourceParametersSqlServer;
  /**
  * teradata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#teradata QuicksightDataSource#teradata}
  */
  readonly teradata?: QuicksightDataSourceParametersTeradata;
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#twitter QuicksightDataSource#twitter}
  */
  readonly twitter?: QuicksightDataSourceParametersTwitter;
}

export function quicksightDataSourceParametersToTerraform(struct?: QuicksightDataSourceParametersOutputReference | QuicksightDataSourceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_elasticsearch: quicksightDataSourceParametersAmazonElasticsearchToTerraform(struct!.amazonElasticsearch),
    athena: quicksightDataSourceParametersAthenaToTerraform(struct!.athena),
    aurora: quicksightDataSourceParametersAuroraToTerraform(struct!.aurora),
    aurora_postgresql: quicksightDataSourceParametersAuroraPostgresqlToTerraform(struct!.auroraPostgresql),
    aws_iot_analytics: quicksightDataSourceParametersAwsIotAnalyticsToTerraform(struct!.awsIotAnalytics),
    jira: quicksightDataSourceParametersJiraToTerraform(struct!.jira),
    maria_db: quicksightDataSourceParametersMariaDbToTerraform(struct!.mariaDb),
    mysql: quicksightDataSourceParametersMysqlToTerraform(struct!.mysql),
    oracle: quicksightDataSourceParametersOracleToTerraform(struct!.oracle),
    postgresql: quicksightDataSourceParametersPostgresqlToTerraform(struct!.postgresql),
    presto: quicksightDataSourceParametersPrestoToTerraform(struct!.presto),
    rds: quicksightDataSourceParametersRdsToTerraform(struct!.rds),
    redshift: quicksightDataSourceParametersRedshiftToTerraform(struct!.redshift),
    s3: quicksightDataSourceParametersS3ToTerraform(struct!.s3),
    service_now: quicksightDataSourceParametersServiceNowToTerraform(struct!.serviceNow),
    snowflake: quicksightDataSourceParametersSnowflakeToTerraform(struct!.snowflake),
    spark: quicksightDataSourceParametersSparkToTerraform(struct!.spark),
    sql_server: quicksightDataSourceParametersSqlServerToTerraform(struct!.sqlServer),
    teradata: quicksightDataSourceParametersTeradataToTerraform(struct!.teradata),
    twitter: quicksightDataSourceParametersTwitterToTerraform(struct!.twitter),
  }
}

export class QuicksightDataSourceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonElasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonElasticsearch = this._amazonElasticsearch?.internalValue;
    }
    if (this._athena?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athena = this._athena?.internalValue;
    }
    if (this._aurora?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aurora = this._aurora?.internalValue;
    }
    if (this._auroraPostgresql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraPostgresql = this._auroraPostgresql?.internalValue;
    }
    if (this._awsIotAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIotAnalytics = this._awsIotAnalytics?.internalValue;
    }
    if (this._jira?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jira = this._jira?.internalValue;
    }
    if (this._mariaDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDb = this._mariaDb?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._oracle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracle = this._oracle?.internalValue;
    }
    if (this._postgresql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresql = this._postgresql?.internalValue;
    }
    if (this._presto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presto = this._presto?.internalValue;
    }
    if (this._rds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rds = this._rds?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._spark?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spark = this._spark?.internalValue;
    }
    if (this._sqlServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServer = this._sqlServer?.internalValue;
    }
    if (this._teradata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teradata = this._teradata?.internalValue;
    }
    if (this._twitter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twitter = this._twitter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amazonElasticsearch.internalValue = undefined;
      this._athena.internalValue = undefined;
      this._aurora.internalValue = undefined;
      this._auroraPostgresql.internalValue = undefined;
      this._awsIotAnalytics.internalValue = undefined;
      this._jira.internalValue = undefined;
      this._mariaDb.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._oracle.internalValue = undefined;
      this._postgresql.internalValue = undefined;
      this._presto.internalValue = undefined;
      this._rds.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._spark.internalValue = undefined;
      this._sqlServer.internalValue = undefined;
      this._teradata.internalValue = undefined;
      this._twitter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amazonElasticsearch.internalValue = value.amazonElasticsearch;
      this._athena.internalValue = value.athena;
      this._aurora.internalValue = value.aurora;
      this._auroraPostgresql.internalValue = value.auroraPostgresql;
      this._awsIotAnalytics.internalValue = value.awsIotAnalytics;
      this._jira.internalValue = value.jira;
      this._mariaDb.internalValue = value.mariaDb;
      this._mysql.internalValue = value.mysql;
      this._oracle.internalValue = value.oracle;
      this._postgresql.internalValue = value.postgresql;
      this._presto.internalValue = value.presto;
      this._rds.internalValue = value.rds;
      this._redshift.internalValue = value.redshift;
      this._s3.internalValue = value.s3;
      this._serviceNow.internalValue = value.serviceNow;
      this._snowflake.internalValue = value.snowflake;
      this._spark.internalValue = value.spark;
      this._sqlServer.internalValue = value.sqlServer;
      this._teradata.internalValue = value.teradata;
      this._twitter.internalValue = value.twitter;
    }
  }

  // amazon_elasticsearch - computed: false, optional: true, required: false
  private _amazonElasticsearch = new QuicksightDataSourceParametersAmazonElasticsearchOutputReference(this, "amazon_elasticsearch");
  public get amazonElasticsearch() {
    return this._amazonElasticsearch;
  }
  public putAmazonElasticsearch(value: QuicksightDataSourceParametersAmazonElasticsearch) {
    this._amazonElasticsearch.internalValue = value;
  }
  public resetAmazonElasticsearch() {
    this._amazonElasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonElasticsearchInput() {
    return this._amazonElasticsearch.internalValue;
  }

  // athena - computed: false, optional: true, required: false
  private _athena = new QuicksightDataSourceParametersAthenaOutputReference(this, "athena");
  public get athena() {
    return this._athena;
  }
  public putAthena(value: QuicksightDataSourceParametersAthena) {
    this._athena.internalValue = value;
  }
  public resetAthena() {
    this._athena.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaInput() {
    return this._athena.internalValue;
  }

  // aurora - computed: false, optional: true, required: false
  private _aurora = new QuicksightDataSourceParametersAuroraOutputReference(this, "aurora");
  public get aurora() {
    return this._aurora;
  }
  public putAurora(value: QuicksightDataSourceParametersAurora) {
    this._aurora.internalValue = value;
  }
  public resetAurora() {
    this._aurora.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraInput() {
    return this._aurora.internalValue;
  }

  // aurora_postgresql - computed: false, optional: true, required: false
  private _auroraPostgresql = new QuicksightDataSourceParametersAuroraPostgresqlOutputReference(this, "aurora_postgresql");
  public get auroraPostgresql() {
    return this._auroraPostgresql;
  }
  public putAuroraPostgresql(value: QuicksightDataSourceParametersAuroraPostgresql) {
    this._auroraPostgresql.internalValue = value;
  }
  public resetAuroraPostgresql() {
    this._auroraPostgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraPostgresqlInput() {
    return this._auroraPostgresql.internalValue;
  }

  // aws_iot_analytics - computed: false, optional: true, required: false
  private _awsIotAnalytics = new QuicksightDataSourceParametersAwsIotAnalyticsOutputReference(this, "aws_iot_analytics");
  public get awsIotAnalytics() {
    return this._awsIotAnalytics;
  }
  public putAwsIotAnalytics(value: QuicksightDataSourceParametersAwsIotAnalytics) {
    this._awsIotAnalytics.internalValue = value;
  }
  public resetAwsIotAnalytics() {
    this._awsIotAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIotAnalyticsInput() {
    return this._awsIotAnalytics.internalValue;
  }

  // jira - computed: false, optional: true, required: false
  private _jira = new QuicksightDataSourceParametersJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: QuicksightDataSourceParametersJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // maria_db - computed: false, optional: true, required: false
  private _mariaDb = new QuicksightDataSourceParametersMariaDbOutputReference(this, "maria_db");
  public get mariaDb() {
    return this._mariaDb;
  }
  public putMariaDb(value: QuicksightDataSourceParametersMariaDb) {
    this._mariaDb.internalValue = value;
  }
  public resetMariaDb() {
    this._mariaDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbInput() {
    return this._mariaDb.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new QuicksightDataSourceParametersMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: QuicksightDataSourceParametersMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // oracle - computed: false, optional: true, required: false
  private _oracle = new QuicksightDataSourceParametersOracleOutputReference(this, "oracle");
  public get oracle() {
    return this._oracle;
  }
  public putOracle(value: QuicksightDataSourceParametersOracle) {
    this._oracle.internalValue = value;
  }
  public resetOracle() {
    this._oracle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInput() {
    return this._oracle.internalValue;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new QuicksightDataSourceParametersPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: QuicksightDataSourceParametersPostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // presto - computed: false, optional: true, required: false
  private _presto = new QuicksightDataSourceParametersPrestoOutputReference(this, "presto");
  public get presto() {
    return this._presto;
  }
  public putPresto(value: QuicksightDataSourceParametersPresto) {
    this._presto.internalValue = value;
  }
  public resetPresto() {
    this._presto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prestoInput() {
    return this._presto.internalValue;
  }

  // rds - computed: false, optional: true, required: false
  private _rds = new QuicksightDataSourceParametersRdsOutputReference(this, "rds");
  public get rds() {
    return this._rds;
  }
  public putRds(value: QuicksightDataSourceParametersRds) {
    this._rds.internalValue = value;
  }
  public resetRds() {
    this._rds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInput() {
    return this._rds.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new QuicksightDataSourceParametersRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: QuicksightDataSourceParametersRedshift) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new QuicksightDataSourceParametersS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: QuicksightDataSourceParametersS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new QuicksightDataSourceParametersServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: QuicksightDataSourceParametersServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new QuicksightDataSourceParametersSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: QuicksightDataSourceParametersSnowflake) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // spark - computed: false, optional: true, required: false
  private _spark = new QuicksightDataSourceParametersSparkOutputReference(this, "spark");
  public get spark() {
    return this._spark;
  }
  public putSpark(value: QuicksightDataSourceParametersSpark) {
    this._spark.internalValue = value;
  }
  public resetSpark() {
    this._spark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkInput() {
    return this._spark.internalValue;
  }

  // sql_server - computed: false, optional: true, required: false
  private _sqlServer = new QuicksightDataSourceParametersSqlServerOutputReference(this, "sql_server");
  public get sqlServer() {
    return this._sqlServer;
  }
  public putSqlServer(value: QuicksightDataSourceParametersSqlServer) {
    this._sqlServer.internalValue = value;
  }
  public resetSqlServer() {
    this._sqlServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerInput() {
    return this._sqlServer.internalValue;
  }

  // teradata - computed: false, optional: true, required: false
  private _teradata = new QuicksightDataSourceParametersTeradataOutputReference(this, "teradata");
  public get teradata() {
    return this._teradata;
  }
  public putTeradata(value: QuicksightDataSourceParametersTeradata) {
    this._teradata.internalValue = value;
  }
  public resetTeradata() {
    this._teradata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teradataInput() {
    return this._teradata.internalValue;
  }

  // twitter - computed: false, optional: true, required: false
  private _twitter = new QuicksightDataSourceParametersTwitterOutputReference(this, "twitter");
  public get twitter() {
    return this._twitter;
  }
  public putTwitter(value: QuicksightDataSourceParametersTwitter) {
    this._twitter.internalValue = value;
  }
  public resetTwitter() {
    this._twitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterInput() {
    return this._twitter.internalValue;
  }
}
export interface QuicksightDataSourcePermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#actions QuicksightDataSource#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#principal QuicksightDataSource#principal}
  */
  readonly principal: string;
}

export function quicksightDataSourcePermissionToTerraform(struct?: QuicksightDataSourcePermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class QuicksightDataSourcePermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightDataSourcePermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourcePermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principal = value.principal;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class QuicksightDataSourcePermissionList extends cdktf.ComplexList {
  public internalValue? : QuicksightDataSourcePermission[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightDataSourcePermissionOutputReference {
    return new QuicksightDataSourcePermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSourceSslProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}
  */
  readonly disableSsl: boolean | cdktf.IResolvable;
}

export function quicksightDataSourceSslPropertiesToTerraform(struct?: QuicksightDataSourceSslPropertiesOutputReference | QuicksightDataSourceSslProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_ssl: cdktf.booleanToTerraform(struct!.disableSsl),
  }
}

export class QuicksightDataSourceSslPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceSslProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSsl = this._disableSsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceSslProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSsl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSsl = value.disableSsl;
    }
  }

  // disable_ssl - computed: false, optional: false, required: true
  private _disableSsl?: boolean | cdktf.IResolvable; 
  public get disableSsl() {
    return this.getBooleanAttribute('disable_ssl');
  }
  public set disableSsl(value: boolean | cdktf.IResolvable) {
    this._disableSsl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslInput() {
    return this._disableSsl;
  }
}
export interface QuicksightDataSourceVpcConnectionProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn: string;
}

export function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceVpcConnectionPropertiesOutputReference | QuicksightDataSourceVpcConnectionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_connection_arn: cdktf.stringToTerraform(struct!.vpcConnectionArn),
  }
}

export class QuicksightDataSourceVpcConnectionPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDataSourceVpcConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcConnectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceVpcConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpcConnectionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpcConnectionArn = value.vpcConnectionArn;
    }
  }

  // vpc_connection_arn - computed: false, optional: false, required: true
  private _vpcConnectionArn?: string; 
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
  public set vpcConnectionArn(value: string) {
    this._vpcConnectionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionArnInput() {
    return this._vpcConnectionArn;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source aws_quicksight_data_source}
*/
export class QuicksightDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_data_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source aws_quicksight_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_data_source',
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
    this._awsAccountId = config.awsAccountId;
    this._dataSourceId = config.dataSourceId;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._credentials.internalValue = config.credentials;
    this._parameters.internalValue = config.parameters;
    this._permission.internalValue = config.permission;
    this._sslProperties.internalValue = config.sslProperties;
    this._vpcConnectionProperties.internalValue = config.vpcConnectionProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new QuicksightDataSourceCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: QuicksightDataSourceCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new QuicksightDataSourceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: QuicksightDataSourceParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new QuicksightDataSourcePermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: QuicksightDataSourcePermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // ssl_properties - computed: false, optional: true, required: false
  private _sslProperties = new QuicksightDataSourceSslPropertiesOutputReference(this, "ssl_properties");
  public get sslProperties() {
    return this._sslProperties;
  }
  public putSslProperties(value: QuicksightDataSourceSslProperties) {
    this._sslProperties.internalValue = value;
  }
  public resetSslProperties() {
    this._sslProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPropertiesInput() {
    return this._sslProperties.internalValue;
  }

  // vpc_connection_properties - computed: false, optional: true, required: false
  private _vpcConnectionProperties = new QuicksightDataSourceVpcConnectionPropertiesOutputReference(this, "vpc_connection_properties");
  public get vpcConnectionProperties() {
    return this._vpcConnectionProperties;
  }
  public putVpcConnectionProperties(value: QuicksightDataSourceVpcConnectionProperties) {
    this._vpcConnectionProperties.internalValue = value;
  }
  public resetVpcConnectionProperties() {
    this._vpcConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionPropertiesInput() {
    return this._vpcConnectionProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      credentials: quicksightDataSourceCredentialsToTerraform(this._credentials.internalValue),
      parameters: quicksightDataSourceParametersToTerraform(this._parameters.internalValue),
      permission: cdktf.listMapper(quicksightDataSourcePermissionToTerraform, true)(this._permission.internalValue),
      ssl_properties: quicksightDataSourceSslPropertiesToTerraform(this._sslProperties.internalValue),
      vpc_connection_properties: quicksightDataSourceVpcConnectionPropertiesToTerraform(this._vpcConnectionProperties.internalValue),
    };
  }
}
