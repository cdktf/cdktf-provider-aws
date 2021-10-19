// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS QuickSight
*/
export namespace QuickSight {
  export interface QuicksightDataSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aws_account_id QuicksightDataSource#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#data_source_id QuicksightDataSource#data_source_id}
    */
    readonly dataSourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#name QuicksightDataSource#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#tags QuicksightDataSource#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#tags_all QuicksightDataSource#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#type QuicksightDataSource#type}
    */
    readonly type: string;
    /**
    * credentials block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#credentials QuicksightDataSource#credentials}
    */
    readonly credentials?: QuicksightDataSourceCredentials;
    /**
    * parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#parameters QuicksightDataSource#parameters}
    */
    readonly parameters: QuicksightDataSourceParameters;
    /**
    * permission block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#permission QuicksightDataSource#permission}
    */
    readonly permission?: QuicksightDataSourcePermission[];
    /**
    * ssl_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#ssl_properties QuicksightDataSource#ssl_properties}
    */
    readonly sslProperties?: QuicksightDataSourceSslProperties;
    /**
    * vpc_connection_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}
    */
    readonly vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties;
  }
  export interface QuicksightDataSourceCredentialsCredentialPair {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#password QuicksightDataSource#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#username QuicksightDataSource#username}
    */
    readonly username: string;
  }

  function quicksightDataSourceCredentialsCredentialPairToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairOutputReference | QuicksightDataSourceCredentialsCredentialPair): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      password: cdktf.stringToTerraform(struct!.password),
      username: cdktf.stringToTerraform(struct!.username),
    }
  }

  export class QuicksightDataSourceCredentialsCredentialPairOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._password
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
      return this._username
    }
  }
  export interface QuicksightDataSourceCredentials {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#copy_source_arn QuicksightDataSource#copy_source_arn}
    */
    readonly copySourceArn?: string;
    /**
    * credential_pair block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#credential_pair QuicksightDataSource#credential_pair}
    */
    readonly credentialPair?: QuicksightDataSourceCredentialsCredentialPair;
  }

  function quicksightDataSourceCredentialsToTerraform(struct?: QuicksightDataSourceCredentialsOutputReference | QuicksightDataSourceCredentials): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      copy_source_arn: cdktf.stringToTerraform(struct!.copySourceArn),
      credential_pair: quicksightDataSourceCredentialsCredentialPairToTerraform(struct!.credentialPair),
    }
  }

  export class QuicksightDataSourceCredentialsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // copy_source_arn - computed: false, optional: true, required: false
    private _copySourceArn?: string | undefined; 
    public get copySourceArn() {
      return this.getStringAttribute('copy_source_arn');
    }
    public set copySourceArn(value: string | undefined) {
      this._copySourceArn = value;
    }
    public resetCopySourceArn() {
      this._copySourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copySourceArnInput() {
      return this._copySourceArn
    }

    // credential_pair - computed: false, optional: true, required: false
    private _credentialPair?: QuicksightDataSourceCredentialsCredentialPair | undefined; 
    private __credentialPairOutput = new QuicksightDataSourceCredentialsCredentialPairOutputReference(this as any, "credential_pair", true);
    public get credentialPair() {
      return this.__credentialPairOutput;
    }
    public putCredentialPair(value: QuicksightDataSourceCredentialsCredentialPair | undefined) {
      this._credentialPair = value;
    }
    public resetCredentialPair() {
      this._credentialPair = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialPairInput() {
      return this._credentialPair
    }
  }
  export interface QuicksightDataSourceParametersAmazonElasticsearch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#domain QuicksightDataSource#domain}
    */
    readonly domain: string;
  }

  function quicksightDataSourceParametersAmazonElasticsearchToTerraform(struct?: QuicksightDataSourceParametersAmazonElasticsearchOutputReference | QuicksightDataSourceParametersAmazonElasticsearch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      domain: cdktf.stringToTerraform(struct!.domain),
    }
  }

  export class QuicksightDataSourceParametersAmazonElasticsearchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._domain
    }
  }
  export interface QuicksightDataSourceParametersAthena {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#work_group QuicksightDataSource#work_group}
    */
    readonly workGroup?: string;
  }

  function quicksightDataSourceParametersAthenaToTerraform(struct?: QuicksightDataSourceParametersAthenaOutputReference | QuicksightDataSourceParametersAthena): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      work_group: cdktf.stringToTerraform(struct!.workGroup),
    }
  }

  export class QuicksightDataSourceParametersAthenaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // work_group - computed: false, optional: true, required: false
    private _workGroup?: string | undefined; 
    public get workGroup() {
      return this.getStringAttribute('work_group');
    }
    public set workGroup(value: string | undefined) {
      this._workGroup = value;
    }
    public resetWorkGroup() {
      this._workGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workGroupInput() {
      return this._workGroup
    }
  }
  export interface QuicksightDataSourceParametersAurora {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersAuroraToTerraform(struct?: QuicksightDataSourceParametersAuroraOutputReference | QuicksightDataSourceParametersAurora): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersAuroraPostgresql {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersAuroraPostgresqlToTerraform(struct?: QuicksightDataSourceParametersAuroraPostgresqlOutputReference | QuicksightDataSourceParametersAuroraPostgresql): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersAwsIotAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#data_set_name QuicksightDataSource#data_set_name}
    */
    readonly dataSetName: string;
  }

  function quicksightDataSourceParametersAwsIotAnalyticsToTerraform(struct?: QuicksightDataSourceParametersAwsIotAnalyticsOutputReference | QuicksightDataSourceParametersAwsIotAnalytics): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data_set_name: cdktf.stringToTerraform(struct!.dataSetName),
    }
  }

  export class QuicksightDataSourceParametersAwsIotAnalyticsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._dataSetName
    }
  }
  export interface QuicksightDataSourceParametersJira {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#site_base_url QuicksightDataSource#site_base_url}
    */
    readonly siteBaseUrl: string;
  }

  function quicksightDataSourceParametersJiraToTerraform(struct?: QuicksightDataSourceParametersJiraOutputReference | QuicksightDataSourceParametersJira): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      site_base_url: cdktf.stringToTerraform(struct!.siteBaseUrl),
    }
  }

  export class QuicksightDataSourceParametersJiraOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._siteBaseUrl
    }
  }
  export interface QuicksightDataSourceParametersMariaDb {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersMariaDbToTerraform(struct?: QuicksightDataSourceParametersMariaDbOutputReference | QuicksightDataSourceParametersMariaDb): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersMysql {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersMysqlToTerraform(struct?: QuicksightDataSourceParametersMysqlOutputReference | QuicksightDataSourceParametersMysql): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersOracle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersOracleToTerraform(struct?: QuicksightDataSourceParametersOracleOutputReference | QuicksightDataSourceParametersOracle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersPostgresql {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersPostgresqlToTerraform(struct?: QuicksightDataSourceParametersPostgresqlOutputReference | QuicksightDataSourceParametersPostgresql): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersPresto {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#catalog QuicksightDataSource#catalog}
    */
    readonly catalog: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersPrestoToTerraform(struct?: QuicksightDataSourceParametersPrestoOutputReference | QuicksightDataSourceParametersPresto): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._catalog
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersRds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#instance_id QuicksightDataSource#instance_id}
    */
    readonly instanceId: string;
  }

  function quicksightDataSourceParametersRdsToTerraform(struct?: QuicksightDataSourceParametersRdsOutputReference | QuicksightDataSourceParametersRds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      database: cdktf.stringToTerraform(struct!.database),
      instance_id: cdktf.stringToTerraform(struct!.instanceId),
    }
  }

  export class QuicksightDataSourceParametersRdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._instanceId
    }
  }
  export interface QuicksightDataSourceParametersRedshift {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#cluster_id QuicksightDataSource#cluster_id}
    */
    readonly clusterId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port?: number;
  }

  function quicksightDataSourceParametersRedshiftToTerraform(struct?: QuicksightDataSourceParametersRedshiftOutputReference | QuicksightDataSourceParametersRedshift): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cluster_id - computed: false, optional: true, required: false
    private _clusterId?: string | undefined; 
    public get clusterId() {
      return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string | undefined) {
      this._clusterId = value;
    }
    public resetClusterId() {
      this._clusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
      return this._clusterId
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
      return this._database
    }

    // host - computed: false, optional: true, required: false
    private _host?: string | undefined; 
    public get host() {
      return this.getStringAttribute('host');
    }
    public set host(value: string | undefined) {
      this._host = value;
    }
    public resetHost() {
      this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
      return this._host
    }

    // port - computed: false, optional: true, required: false
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersS3ManifestFileLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#bucket QuicksightDataSource#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#key QuicksightDataSource#key}
    */
    readonly key: string;
  }

  function quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct?: QuicksightDataSourceParametersS3ManifestFileLocationOutputReference | QuicksightDataSourceParametersS3ManifestFileLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      key: cdktf.stringToTerraform(struct!.key),
    }
  }

  export class QuicksightDataSourceParametersS3ManifestFileLocationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._bucket
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
      return this._key
    }
  }
  export interface QuicksightDataSourceParametersS3 {
    /**
    * manifest_file_location block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#manifest_file_location QuicksightDataSource#manifest_file_location}
    */
    readonly manifestFileLocation: QuicksightDataSourceParametersS3ManifestFileLocation;
  }

  function quicksightDataSourceParametersS3ToTerraform(struct?: QuicksightDataSourceParametersS3OutputReference | QuicksightDataSourceParametersS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      manifest_file_location: quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct!.manifestFileLocation),
    }
  }

  export class QuicksightDataSourceParametersS3OutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // manifest_file_location - computed: false, optional: false, required: true
    private _manifestFileLocation?: QuicksightDataSourceParametersS3ManifestFileLocation; 
    private __manifestFileLocationOutput = new QuicksightDataSourceParametersS3ManifestFileLocationOutputReference(this as any, "manifest_file_location", true);
    public get manifestFileLocation() {
      return this.__manifestFileLocationOutput;
    }
    public putManifestFileLocation(value: QuicksightDataSourceParametersS3ManifestFileLocation) {
      this._manifestFileLocation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestFileLocationInput() {
      return this._manifestFileLocation
    }
  }
  export interface QuicksightDataSourceParametersServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#site_base_url QuicksightDataSource#site_base_url}
    */
    readonly siteBaseUrl: string;
  }

  function quicksightDataSourceParametersServiceNowToTerraform(struct?: QuicksightDataSourceParametersServiceNowOutputReference | QuicksightDataSourceParametersServiceNow): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      site_base_url: cdktf.stringToTerraform(struct!.siteBaseUrl),
    }
  }

  export class QuicksightDataSourceParametersServiceNowOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._siteBaseUrl
    }
  }
  export interface QuicksightDataSourceParametersSnowflake {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#warehouse QuicksightDataSource#warehouse}
    */
    readonly warehouse: string;
  }

  function quicksightDataSourceParametersSnowflakeToTerraform(struct?: QuicksightDataSourceParametersSnowflakeOutputReference | QuicksightDataSourceParametersSnowflake): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._host
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
      return this._warehouse
    }
  }
  export interface QuicksightDataSourceParametersSpark {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersSparkToTerraform(struct?: QuicksightDataSourceParametersSparkOutputReference | QuicksightDataSourceParametersSpark): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      host: cdktf.stringToTerraform(struct!.host),
      port: cdktf.numberToTerraform(struct!.port),
    }
  }

  export class QuicksightDataSourceParametersSparkOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersSqlServer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersSqlServerToTerraform(struct?: QuicksightDataSourceParametersSqlServerOutputReference | QuicksightDataSourceParametersSqlServer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersTeradata {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#port QuicksightDataSource#port}
    */
    readonly port: number;
  }

  function quicksightDataSourceParametersTeradataToTerraform(struct?: QuicksightDataSourceParametersTeradataOutputReference | QuicksightDataSourceParametersTeradata): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._database
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
      return this._host
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
      return this._port
    }
  }
  export interface QuicksightDataSourceParametersTwitter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#max_rows QuicksightDataSource#max_rows}
    */
    readonly maxRows: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#query QuicksightDataSource#query}
    */
    readonly query: string;
  }

  function quicksightDataSourceParametersTwitterToTerraform(struct?: QuicksightDataSourceParametersTwitterOutputReference | QuicksightDataSourceParametersTwitter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_rows: cdktf.numberToTerraform(struct!.maxRows),
      query: cdktf.stringToTerraform(struct!.query),
    }
  }

  export class QuicksightDataSourceParametersTwitterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._maxRows
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
      return this._query
    }
  }
  export interface QuicksightDataSourceParameters {
    /**
    * amazon_elasticsearch block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}
    */
    readonly amazonElasticsearch?: QuicksightDataSourceParametersAmazonElasticsearch;
    /**
    * athena block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#athena QuicksightDataSource#athena}
    */
    readonly athena?: QuicksightDataSourceParametersAthena;
    /**
    * aurora block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aurora QuicksightDataSource#aurora}
    */
    readonly aurora?: QuicksightDataSourceParametersAurora;
    /**
    * aurora_postgresql block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aurora_postgresql QuicksightDataSource#aurora_postgresql}
    */
    readonly auroraPostgresql?: QuicksightDataSourceParametersAuroraPostgresql;
    /**
    * aws_iot_analytics block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}
    */
    readonly awsIotAnalytics?: QuicksightDataSourceParametersAwsIotAnalytics;
    /**
    * jira block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#jira QuicksightDataSource#jira}
    */
    readonly jira?: QuicksightDataSourceParametersJira;
    /**
    * maria_db block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#maria_db QuicksightDataSource#maria_db}
    */
    readonly mariaDb?: QuicksightDataSourceParametersMariaDb;
    /**
    * mysql block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#mysql QuicksightDataSource#mysql}
    */
    readonly mysql?: QuicksightDataSourceParametersMysql;
    /**
    * oracle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#oracle QuicksightDataSource#oracle}
    */
    readonly oracle?: QuicksightDataSourceParametersOracle;
    /**
    * postgresql block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#postgresql QuicksightDataSource#postgresql}
    */
    readonly postgresql?: QuicksightDataSourceParametersPostgresql;
    /**
    * presto block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#presto QuicksightDataSource#presto}
    */
    readonly presto?: QuicksightDataSourceParametersPresto;
    /**
    * rds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#rds QuicksightDataSource#rds}
    */
    readonly rds?: QuicksightDataSourceParametersRds;
    /**
    * redshift block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#redshift QuicksightDataSource#redshift}
    */
    readonly redshift?: QuicksightDataSourceParametersRedshift;
    /**
    * s3 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#s3 QuicksightDataSource#s3}
    */
    readonly s3?: QuicksightDataSourceParametersS3;
    /**
    * service_now block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#service_now QuicksightDataSource#service_now}
    */
    readonly serviceNow?: QuicksightDataSourceParametersServiceNow;
    /**
    * snowflake block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#snowflake QuicksightDataSource#snowflake}
    */
    readonly snowflake?: QuicksightDataSourceParametersSnowflake;
    /**
    * spark block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#spark QuicksightDataSource#spark}
    */
    readonly spark?: QuicksightDataSourceParametersSpark;
    /**
    * sql_server block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#sql_server QuicksightDataSource#sql_server}
    */
    readonly sqlServer?: QuicksightDataSourceParametersSqlServer;
    /**
    * teradata block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#teradata QuicksightDataSource#teradata}
    */
    readonly teradata?: QuicksightDataSourceParametersTeradata;
    /**
    * twitter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#twitter QuicksightDataSource#twitter}
    */
    readonly twitter?: QuicksightDataSourceParametersTwitter;
  }

  function quicksightDataSourceParametersToTerraform(struct?: QuicksightDataSourceParametersOutputReference | QuicksightDataSourceParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // amazon_elasticsearch - computed: false, optional: true, required: false
    private _amazonElasticsearch?: QuicksightDataSourceParametersAmazonElasticsearch | undefined; 
    private __amazonElasticsearchOutput = new QuicksightDataSourceParametersAmazonElasticsearchOutputReference(this as any, "amazon_elasticsearch", true);
    public get amazonElasticsearch() {
      return this.__amazonElasticsearchOutput;
    }
    public putAmazonElasticsearch(value: QuicksightDataSourceParametersAmazonElasticsearch | undefined) {
      this._amazonElasticsearch = value;
    }
    public resetAmazonElasticsearch() {
      this._amazonElasticsearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonElasticsearchInput() {
      return this._amazonElasticsearch
    }

    // athena - computed: false, optional: true, required: false
    private _athena?: QuicksightDataSourceParametersAthena | undefined; 
    private __athenaOutput = new QuicksightDataSourceParametersAthenaOutputReference(this as any, "athena", true);
    public get athena() {
      return this.__athenaOutput;
    }
    public putAthena(value: QuicksightDataSourceParametersAthena | undefined) {
      this._athena = value;
    }
    public resetAthena() {
      this._athena = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get athenaInput() {
      return this._athena
    }

    // aurora - computed: false, optional: true, required: false
    private _aurora?: QuicksightDataSourceParametersAurora | undefined; 
    private __auroraOutput = new QuicksightDataSourceParametersAuroraOutputReference(this as any, "aurora", true);
    public get aurora() {
      return this.__auroraOutput;
    }
    public putAurora(value: QuicksightDataSourceParametersAurora | undefined) {
      this._aurora = value;
    }
    public resetAurora() {
      this._aurora = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auroraInput() {
      return this._aurora
    }

    // aurora_postgresql - computed: false, optional: true, required: false
    private _auroraPostgresql?: QuicksightDataSourceParametersAuroraPostgresql | undefined; 
    private __auroraPostgresqlOutput = new QuicksightDataSourceParametersAuroraPostgresqlOutputReference(this as any, "aurora_postgresql", true);
    public get auroraPostgresql() {
      return this.__auroraPostgresqlOutput;
    }
    public putAuroraPostgresql(value: QuicksightDataSourceParametersAuroraPostgresql | undefined) {
      this._auroraPostgresql = value;
    }
    public resetAuroraPostgresql() {
      this._auroraPostgresql = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auroraPostgresqlInput() {
      return this._auroraPostgresql
    }

    // aws_iot_analytics - computed: false, optional: true, required: false
    private _awsIotAnalytics?: QuicksightDataSourceParametersAwsIotAnalytics | undefined; 
    private __awsIotAnalyticsOutput = new QuicksightDataSourceParametersAwsIotAnalyticsOutputReference(this as any, "aws_iot_analytics", true);
    public get awsIotAnalytics() {
      return this.__awsIotAnalyticsOutput;
    }
    public putAwsIotAnalytics(value: QuicksightDataSourceParametersAwsIotAnalytics | undefined) {
      this._awsIotAnalytics = value;
    }
    public resetAwsIotAnalytics() {
      this._awsIotAnalytics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsIotAnalyticsInput() {
      return this._awsIotAnalytics
    }

    // jira - computed: false, optional: true, required: false
    private _jira?: QuicksightDataSourceParametersJira | undefined; 
    private __jiraOutput = new QuicksightDataSourceParametersJiraOutputReference(this as any, "jira", true);
    public get jira() {
      return this.__jiraOutput;
    }
    public putJira(value: QuicksightDataSourceParametersJira | undefined) {
      this._jira = value;
    }
    public resetJira() {
      this._jira = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jiraInput() {
      return this._jira
    }

    // maria_db - computed: false, optional: true, required: false
    private _mariaDb?: QuicksightDataSourceParametersMariaDb | undefined; 
    private __mariaDbOutput = new QuicksightDataSourceParametersMariaDbOutputReference(this as any, "maria_db", true);
    public get mariaDb() {
      return this.__mariaDbOutput;
    }
    public putMariaDb(value: QuicksightDataSourceParametersMariaDb | undefined) {
      this._mariaDb = value;
    }
    public resetMariaDb() {
      this._mariaDb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mariaDbInput() {
      return this._mariaDb
    }

    // mysql - computed: false, optional: true, required: false
    private _mysql?: QuicksightDataSourceParametersMysql | undefined; 
    private __mysqlOutput = new QuicksightDataSourceParametersMysqlOutputReference(this as any, "mysql", true);
    public get mysql() {
      return this.__mysqlOutput;
    }
    public putMysql(value: QuicksightDataSourceParametersMysql | undefined) {
      this._mysql = value;
    }
    public resetMysql() {
      this._mysql = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mysqlInput() {
      return this._mysql
    }

    // oracle - computed: false, optional: true, required: false
    private _oracle?: QuicksightDataSourceParametersOracle | undefined; 
    private __oracleOutput = new QuicksightDataSourceParametersOracleOutputReference(this as any, "oracle", true);
    public get oracle() {
      return this.__oracleOutput;
    }
    public putOracle(value: QuicksightDataSourceParametersOracle | undefined) {
      this._oracle = value;
    }
    public resetOracle() {
      this._oracle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oracleInput() {
      return this._oracle
    }

    // postgresql - computed: false, optional: true, required: false
    private _postgresql?: QuicksightDataSourceParametersPostgresql | undefined; 
    private __postgresqlOutput = new QuicksightDataSourceParametersPostgresqlOutputReference(this as any, "postgresql", true);
    public get postgresql() {
      return this.__postgresqlOutput;
    }
    public putPostgresql(value: QuicksightDataSourceParametersPostgresql | undefined) {
      this._postgresql = value;
    }
    public resetPostgresql() {
      this._postgresql = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postgresqlInput() {
      return this._postgresql
    }

    // presto - computed: false, optional: true, required: false
    private _presto?: QuicksightDataSourceParametersPresto | undefined; 
    private __prestoOutput = new QuicksightDataSourceParametersPrestoOutputReference(this as any, "presto", true);
    public get presto() {
      return this.__prestoOutput;
    }
    public putPresto(value: QuicksightDataSourceParametersPresto | undefined) {
      this._presto = value;
    }
    public resetPresto() {
      this._presto = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prestoInput() {
      return this._presto
    }

    // rds - computed: false, optional: true, required: false
    private _rds?: QuicksightDataSourceParametersRds | undefined; 
    private __rdsOutput = new QuicksightDataSourceParametersRdsOutputReference(this as any, "rds", true);
    public get rds() {
      return this.__rdsOutput;
    }
    public putRds(value: QuicksightDataSourceParametersRds | undefined) {
      this._rds = value;
    }
    public resetRds() {
      this._rds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsInput() {
      return this._rds
    }

    // redshift - computed: false, optional: true, required: false
    private _redshift?: QuicksightDataSourceParametersRedshift | undefined; 
    private __redshiftOutput = new QuicksightDataSourceParametersRedshiftOutputReference(this as any, "redshift", true);
    public get redshift() {
      return this.__redshiftOutput;
    }
    public putRedshift(value: QuicksightDataSourceParametersRedshift | undefined) {
      this._redshift = value;
    }
    public resetRedshift() {
      this._redshift = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftInput() {
      return this._redshift
    }

    // s3 - computed: false, optional: true, required: false
    private _s3?: QuicksightDataSourceParametersS3 | undefined; 
    private __s3Output = new QuicksightDataSourceParametersS3OutputReference(this as any, "s3", true);
    public get s3() {
      return this.__s3Output;
    }
    public putS3(value: QuicksightDataSourceParametersS3 | undefined) {
      this._s3 = value;
    }
    public resetS3() {
      this._s3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
      return this._s3
    }

    // service_now - computed: false, optional: true, required: false
    private _serviceNow?: QuicksightDataSourceParametersServiceNow | undefined; 
    private __serviceNowOutput = new QuicksightDataSourceParametersServiceNowOutputReference(this as any, "service_now", true);
    public get serviceNow() {
      return this.__serviceNowOutput;
    }
    public putServiceNow(value: QuicksightDataSourceParametersServiceNow | undefined) {
      this._serviceNow = value;
    }
    public resetServiceNow() {
      this._serviceNow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNowInput() {
      return this._serviceNow
    }

    // snowflake - computed: false, optional: true, required: false
    private _snowflake?: QuicksightDataSourceParametersSnowflake | undefined; 
    private __snowflakeOutput = new QuicksightDataSourceParametersSnowflakeOutputReference(this as any, "snowflake", true);
    public get snowflake() {
      return this.__snowflakeOutput;
    }
    public putSnowflake(value: QuicksightDataSourceParametersSnowflake | undefined) {
      this._snowflake = value;
    }
    public resetSnowflake() {
      this._snowflake = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snowflakeInput() {
      return this._snowflake
    }

    // spark - computed: false, optional: true, required: false
    private _spark?: QuicksightDataSourceParametersSpark | undefined; 
    private __sparkOutput = new QuicksightDataSourceParametersSparkOutputReference(this as any, "spark", true);
    public get spark() {
      return this.__sparkOutput;
    }
    public putSpark(value: QuicksightDataSourceParametersSpark | undefined) {
      this._spark = value;
    }
    public resetSpark() {
      this._spark = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkInput() {
      return this._spark
    }

    // sql_server - computed: false, optional: true, required: false
    private _sqlServer?: QuicksightDataSourceParametersSqlServer | undefined; 
    private __sqlServerOutput = new QuicksightDataSourceParametersSqlServerOutputReference(this as any, "sql_server", true);
    public get sqlServer() {
      return this.__sqlServerOutput;
    }
    public putSqlServer(value: QuicksightDataSourceParametersSqlServer | undefined) {
      this._sqlServer = value;
    }
    public resetSqlServer() {
      this._sqlServer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlServerInput() {
      return this._sqlServer
    }

    // teradata - computed: false, optional: true, required: false
    private _teradata?: QuicksightDataSourceParametersTeradata | undefined; 
    private __teradataOutput = new QuicksightDataSourceParametersTeradataOutputReference(this as any, "teradata", true);
    public get teradata() {
      return this.__teradataOutput;
    }
    public putTeradata(value: QuicksightDataSourceParametersTeradata | undefined) {
      this._teradata = value;
    }
    public resetTeradata() {
      this._teradata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get teradataInput() {
      return this._teradata
    }

    // twitter - computed: false, optional: true, required: false
    private _twitter?: QuicksightDataSourceParametersTwitter | undefined; 
    private __twitterOutput = new QuicksightDataSourceParametersTwitterOutputReference(this as any, "twitter", true);
    public get twitter() {
      return this.__twitterOutput;
    }
    public putTwitter(value: QuicksightDataSourceParametersTwitter | undefined) {
      this._twitter = value;
    }
    public resetTwitter() {
      this._twitter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get twitterInput() {
      return this._twitter
    }
  }
  export interface QuicksightDataSourcePermission {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#actions QuicksightDataSource#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#principal QuicksightDataSource#principal}
    */
    readonly principal: string;
  }

  function quicksightDataSourcePermissionToTerraform(struct?: QuicksightDataSourcePermission): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
      principal: cdktf.stringToTerraform(struct!.principal),
    }
  }

  export interface QuicksightDataSourceSslProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#disable_ssl QuicksightDataSource#disable_ssl}
    */
    readonly disableSsl: boolean | cdktf.IResolvable;
  }

  function quicksightDataSourceSslPropertiesToTerraform(struct?: QuicksightDataSourceSslPropertiesOutputReference | QuicksightDataSourceSslProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      disable_ssl: cdktf.booleanToTerraform(struct!.disableSsl),
    }
  }

  export class QuicksightDataSourceSslPropertiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // disable_ssl - computed: false, optional: false, required: true
    private _disableSsl?: boolean | cdktf.IResolvable; 
    public get disableSsl() {
      return this.getBooleanAttribute('disable_ssl') as any;
    }
    public set disableSsl(value: boolean | cdktf.IResolvable) {
      this._disableSsl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get disableSslInput() {
      return this._disableSsl
    }
  }
  export interface QuicksightDataSourceVpcConnectionProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn: string;
  }

  function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceVpcConnectionPropertiesOutputReference | QuicksightDataSourceVpcConnectionProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      vpc_connection_arn: cdktf.stringToTerraform(struct!.vpcConnectionArn),
    }
  }

  export class QuicksightDataSourceVpcConnectionPropertiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._vpcConnectionArn
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source}
  */
  export class QuicksightDataSource extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_quicksight_data_source";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDataSourceConfig
    */
    public constructor(scope: Construct, id: string, config: QuicksightDataSourceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_quicksight_data_source',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._awsAccountId = config.awsAccountId;
      this._dataSourceId = config.dataSourceId;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._credentials = config.credentials;
      this._parameters = config.parameters;
      this._permission = config.permission;
      this._sslProperties = config.sslProperties;
      this._vpcConnectionProperties = config.vpcConnectionProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId?: string | undefined; 
    public get awsAccountId() {
      return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string | undefined) {
      this._awsAccountId = value;
    }
    public resetAwsAccountId() {
      this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
      return this._awsAccountId
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
      return this._dataSourceId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
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
      return this._type
    }

    // credentials - computed: false, optional: true, required: false
    private _credentials?: QuicksightDataSourceCredentials | undefined; 
    private __credentialsOutput = new QuicksightDataSourceCredentialsOutputReference(this as any, "credentials", true);
    public get credentials() {
      return this.__credentialsOutput;
    }
    public putCredentials(value: QuicksightDataSourceCredentials | undefined) {
      this._credentials = value;
    }
    public resetCredentials() {
      this._credentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
      return this._credentials
    }

    // parameters - computed: false, optional: false, required: true
    private _parameters?: QuicksightDataSourceParameters; 
    private __parametersOutput = new QuicksightDataSourceParametersOutputReference(this as any, "parameters", true);
    public get parameters() {
      return this.__parametersOutput;
    }
    public putParameters(value: QuicksightDataSourceParameters) {
      this._parameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // permission - computed: false, optional: true, required: false
    private _permission?: QuicksightDataSourcePermission[] | undefined; 
    public get permission() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('permission') as any;
    }
    public set permission(value: QuicksightDataSourcePermission[] | undefined) {
      this._permission = value;
    }
    public resetPermission() {
      this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionInput() {
      return this._permission
    }

    // ssl_properties - computed: false, optional: true, required: false
    private _sslProperties?: QuicksightDataSourceSslProperties | undefined; 
    private __sslPropertiesOutput = new QuicksightDataSourceSslPropertiesOutputReference(this as any, "ssl_properties", true);
    public get sslProperties() {
      return this.__sslPropertiesOutput;
    }
    public putSslProperties(value: QuicksightDataSourceSslProperties | undefined) {
      this._sslProperties = value;
    }
    public resetSslProperties() {
      this._sslProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslPropertiesInput() {
      return this._sslProperties
    }

    // vpc_connection_properties - computed: false, optional: true, required: false
    private _vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties | undefined; 
    private __vpcConnectionPropertiesOutput = new QuicksightDataSourceVpcConnectionPropertiesOutputReference(this as any, "vpc_connection_properties", true);
    public get vpcConnectionProperties() {
      return this.__vpcConnectionPropertiesOutput;
    }
    public putVpcConnectionProperties(value: QuicksightDataSourceVpcConnectionProperties | undefined) {
      this._vpcConnectionProperties = value;
    }
    public resetVpcConnectionProperties() {
      this._vpcConnectionProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionPropertiesInput() {
      return this._vpcConnectionProperties
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
        data_source_id: cdktf.stringToTerraform(this._dataSourceId),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        credentials: quicksightDataSourceCredentialsToTerraform(this._credentials),
        parameters: quicksightDataSourceParametersToTerraform(this._parameters),
        permission: cdktf.listMapper(quicksightDataSourcePermissionToTerraform)(this._permission),
        ssl_properties: quicksightDataSourceSslPropertiesToTerraform(this._sslProperties),
        vpc_connection_properties: quicksightDataSourceVpcConnectionPropertiesToTerraform(this._vpcConnectionProperties),
      };
    }
  }
  export interface QuicksightGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html#aws_account_id QuicksightGroup#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html#description QuicksightGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html#group_name QuicksightGroup#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html#namespace QuicksightGroup#namespace}
    */
    readonly namespace?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html aws_quicksight_group}
  */
  export class QuicksightGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_quicksight_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group.html aws_quicksight_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightGroupConfig
    */
    public constructor(scope: Construct, id: string, config: QuicksightGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_quicksight_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._awsAccountId = config.awsAccountId;
      this._description = config.description;
      this._groupName = config.groupName;
      this._namespace = config.namespace;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId?: string | undefined; 
    public get awsAccountId() {
      return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string | undefined) {
      this._awsAccountId = value;
    }
    public resetAwsAccountId() {
      this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
      return this._awsAccountId
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // group_name - computed: false, optional: false, required: true
    private _groupName?: string; 
    public get groupName() {
      return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
      this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
      return this._groupName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // namespace - computed: false, optional: true, required: false
    private _namespace?: string | undefined; 
    public get namespace() {
      return this.getStringAttribute('namespace');
    }
    public set namespace(value: string | undefined) {
      this._namespace = value;
    }
    public resetNamespace() {
      this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
      return this._namespace
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
        description: cdktf.stringToTerraform(this._description),
        group_name: cdktf.stringToTerraform(this._groupName),
        namespace: cdktf.stringToTerraform(this._namespace),
      };
    }
  }
  export interface QuicksightGroupMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html#aws_account_id QuicksightGroupMembership#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html#group_name QuicksightGroupMembership#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html#member_name QuicksightGroupMembership#member_name}
    */
    readonly memberName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html#namespace QuicksightGroupMembership#namespace}
    */
    readonly namespace?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html aws_quicksight_group_membership}
  */
  export class QuicksightGroupMembership extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_quicksight_group_membership";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html aws_quicksight_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightGroupMembershipConfig
    */
    public constructor(scope: Construct, id: string, config: QuicksightGroupMembershipConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_quicksight_group_membership',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._awsAccountId = config.awsAccountId;
      this._groupName = config.groupName;
      this._memberName = config.memberName;
      this._namespace = config.namespace;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId?: string | undefined; 
    public get awsAccountId() {
      return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string | undefined) {
      this._awsAccountId = value;
    }
    public resetAwsAccountId() {
      this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
      return this._awsAccountId
    }

    // group_name - computed: false, optional: false, required: true
    private _groupName?: string; 
    public get groupName() {
      return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
      this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
      return this._groupName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // member_name - computed: false, optional: false, required: true
    private _memberName?: string; 
    public get memberName() {
      return this.getStringAttribute('member_name');
    }
    public set memberName(value: string) {
      this._memberName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get memberNameInput() {
      return this._memberName
    }

    // namespace - computed: false, optional: true, required: false
    private _namespace?: string | undefined; 
    public get namespace() {
      return this.getStringAttribute('namespace');
    }
    public set namespace(value: string | undefined) {
      this._namespace = value;
    }
    public resetNamespace() {
      this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
      return this._namespace
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
        group_name: cdktf.stringToTerraform(this._groupName),
        member_name: cdktf.stringToTerraform(this._memberName),
        namespace: cdktf.stringToTerraform(this._namespace),
      };
    }
  }
  export interface QuicksightUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#aws_account_id QuicksightUser#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#email QuicksightUser#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#iam_arn QuicksightUser#iam_arn}
    */
    readonly iamArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#identity_type QuicksightUser#identity_type}
    */
    readonly identityType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#namespace QuicksightUser#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#session_name QuicksightUser#session_name}
    */
    readonly sessionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#user_name QuicksightUser#user_name}
    */
    readonly userName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#user_role QuicksightUser#user_role}
    */
    readonly userRole: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html aws_quicksight_user}
  */
  export class QuicksightUser extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_quicksight_user";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html aws_quicksight_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightUserConfig
    */
    public constructor(scope: Construct, id: string, config: QuicksightUserConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_quicksight_user',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._awsAccountId = config.awsAccountId;
      this._email = config.email;
      this._iamArn = config.iamArn;
      this._identityType = config.identityType;
      this._namespace = config.namespace;
      this._sessionName = config.sessionName;
      this._userName = config.userName;
      this._userRole = config.userRole;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId?: string | undefined; 
    public get awsAccountId() {
      return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string | undefined) {
      this._awsAccountId = value;
    }
    public resetAwsAccountId() {
      this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
      return this._awsAccountId
    }

    // email - computed: false, optional: false, required: true
    private _email?: string; 
    public get email() {
      return this.getStringAttribute('email');
    }
    public set email(value: string) {
      this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
      return this._email
    }

    // iam_arn - computed: false, optional: true, required: false
    private _iamArn?: string | undefined; 
    public get iamArn() {
      return this.getStringAttribute('iam_arn');
    }
    public set iamArn(value: string | undefined) {
      this._iamArn = value;
    }
    public resetIamArn() {
      this._iamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamArnInput() {
      return this._iamArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity_type - computed: false, optional: false, required: true
    private _identityType?: string; 
    public get identityType() {
      return this.getStringAttribute('identity_type');
    }
    public set identityType(value: string) {
      this._identityType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityTypeInput() {
      return this._identityType
    }

    // namespace - computed: false, optional: true, required: false
    private _namespace?: string | undefined; 
    public get namespace() {
      return this.getStringAttribute('namespace');
    }
    public set namespace(value: string | undefined) {
      this._namespace = value;
    }
    public resetNamespace() {
      this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
      return this._namespace
    }

    // session_name - computed: false, optional: true, required: false
    private _sessionName?: string | undefined; 
    public get sessionName() {
      return this.getStringAttribute('session_name');
    }
    public set sessionName(value: string | undefined) {
      this._sessionName = value;
    }
    public resetSessionName() {
      this._sessionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionNameInput() {
      return this._sessionName
    }

    // user_name - computed: false, optional: true, required: false
    private _userName?: string | undefined; 
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string | undefined) {
      this._userName = value;
    }
    public resetUserName() {
      this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // user_role - computed: false, optional: false, required: true
    private _userRole?: string; 
    public get userRole() {
      return this.getStringAttribute('user_role');
    }
    public set userRole(value: string) {
      this._userRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userRoleInput() {
      return this._userRole
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
        email: cdktf.stringToTerraform(this._email),
        iam_arn: cdktf.stringToTerraform(this._iamArn),
        identity_type: cdktf.stringToTerraform(this._identityType),
        namespace: cdktf.stringToTerraform(this._namespace),
        session_name: cdktf.stringToTerraform(this._sessionName),
        user_name: cdktf.stringToTerraform(this._userName),
        user_role: cdktf.stringToTerraform(this._userRole),
      };
    }
  }
}
