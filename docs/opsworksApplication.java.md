# `opsworksApplication` Submodule <a name="`opsworksApplication` Submodule" id="@cdktf/provider-aws.opsworksApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksApplication <a name="OpsworksApplication" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application aws_opsworks_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplication;

OpsworksApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .stackId(java.lang.String)
    .type(java.lang.String)
//  .appSource(IResolvable)
//  .appSource(java.util.List<OpsworksApplicationAppSource>)
//  .autoBundleOnDeploy(java.lang.String)
//  .awsFlowRubySettings(java.lang.String)
//  .dataSourceArn(java.lang.String)
//  .dataSourceDatabaseName(java.lang.String)
//  .dataSourceType(java.lang.String)
//  .description(java.lang.String)
//  .documentRoot(java.lang.String)
//  .domains(java.util.List<java.lang.String>)
//  .enableSsl(java.lang.Boolean)
//  .enableSsl(IResolvable)
//  .environment(IResolvable)
//  .environment(java.util.List<OpsworksApplicationEnvironment>)
//  .id(java.lang.String)
//  .railsEnv(java.lang.String)
//  .shortName(java.lang.String)
//  .sslConfiguration(IResolvable)
//  .sslConfiguration(java.util.List<OpsworksApplicationSslConfiguration>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.appSource">appSource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>></code> | app_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.autoBundleOnDeploy">autoBundleOnDeploy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.awsFlowRubySettings">awsFlowRubySettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.dataSourceDatabaseName">dataSourceDatabaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.documentRoot">documentRoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.enableSsl">enableSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.environment">environment</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.railsEnv">railsEnv</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.shortName">shortName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.sslConfiguration">sslConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>></code> | ssl_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.stackId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}.

---

##### `appSource`<sup>Optional</sup> <a name="appSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.appSource"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>>

app_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#app_source OpsworksApplication#app_source}

---

##### `autoBundleOnDeploy`<sup>Optional</sup> <a name="autoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.autoBundleOnDeploy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}.

---

##### `awsFlowRubySettings`<sup>Optional</sup> <a name="awsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.awsFlowRubySettings"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}.

---

##### `dataSourceArn`<sup>Optional</sup> <a name="dataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.dataSourceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}.

---

##### `dataSourceDatabaseName`<sup>Optional</sup> <a name="dataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.dataSourceDatabaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}.

---

##### `dataSourceType`<sup>Optional</sup> <a name="dataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.dataSourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}.

---

##### `documentRoot`<sup>Optional</sup> <a name="documentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.documentRoot"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}.

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.domains"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}.

---

##### `enableSsl`<sup>Optional</sup> <a name="enableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.enableSsl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.environment"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#environment OpsworksApplication#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `railsEnv`<sup>Optional</sup> <a name="railsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.railsEnv"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}.

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.shortName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}.

---

##### `sslConfiguration`<sup>Optional</sup> <a name="sslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.sslConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>>

ssl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssl_configuration OpsworksApplication#ssl_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource">putAppSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration">putSslConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAppSource">resetAppSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAutoBundleOnDeploy">resetAutoBundleOnDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAwsFlowRubySettings">resetAwsFlowRubySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceArn">resetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceDatabaseName">resetDataSourceDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceType">resetDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDocumentRoot">resetDocumentRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnableSsl">resetEnableSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetRailsEnv">resetRailsEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetSslConfiguration">resetSslConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAppSource` <a name="putAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource"></a>

```java
public void putAppSource(IResolvable OR java.util.List<OpsworksApplicationAppSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment"></a>

```java
public void putEnvironment(IResolvable OR java.util.List<OpsworksApplicationEnvironment> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>>

---

##### `putSslConfiguration` <a name="putSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration"></a>

```java
public void putSslConfiguration(IResolvable OR java.util.List<OpsworksApplicationSslConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>>

---

##### `resetAppSource` <a name="resetAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAppSource"></a>

```java
public void resetAppSource()
```

##### `resetAutoBundleOnDeploy` <a name="resetAutoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAutoBundleOnDeploy"></a>

```java
public void resetAutoBundleOnDeploy()
```

##### `resetAwsFlowRubySettings` <a name="resetAwsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAwsFlowRubySettings"></a>

```java
public void resetAwsFlowRubySettings()
```

##### `resetDataSourceArn` <a name="resetDataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceArn"></a>

```java
public void resetDataSourceArn()
```

##### `resetDataSourceDatabaseName` <a name="resetDataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceDatabaseName"></a>

```java
public void resetDataSourceDatabaseName()
```

##### `resetDataSourceType` <a name="resetDataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceType"></a>

```java
public void resetDataSourceType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentRoot` <a name="resetDocumentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDocumentRoot"></a>

```java
public void resetDocumentRoot()
```

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDomains"></a>

```java
public void resetDomains()
```

##### `resetEnableSsl` <a name="resetEnableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnableSsl"></a>

```java
public void resetEnableSsl()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetId"></a>

```java
public void resetId()
```

##### `resetRailsEnv` <a name="resetRailsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetRailsEnv"></a>

```java
public void resetRailsEnv()
```

##### `resetShortName` <a name="resetShortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetShortName"></a>

```java
public void resetShortName()
```

##### `resetSslConfiguration` <a name="resetSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetSslConfiguration"></a>

```java
public void resetSslConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplication;

OpsworksApplication.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplication;

OpsworksApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplication;

OpsworksApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSource">appSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList">OpsworksApplicationAppSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList">OpsworksApplicationEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList">OpsworksApplicationSslConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSourceInput">appSourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeployInput">autoBundleOnDeployInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettingsInput">awsFlowRubySettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArnInput">dataSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseNameInput">dataSourceDatabaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceTypeInput">dataSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRootInput">documentRootInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSslInput">enableSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environmentInput">environmentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnvInput">railsEnvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortNameInput">shortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfigurationInput">sslConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackIdInput">stackIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeploy">autoBundleOnDeploy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettings">awsFlowRubySettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseName">dataSourceDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRoot">documentRoot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSsl">enableSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnv">railsEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackId">stackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appSource`<sup>Required</sup> <a name="appSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSource"></a>

```java
public OpsworksApplicationAppSourceList getAppSource();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList">OpsworksApplicationAppSourceList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environment"></a>

```java
public OpsworksApplicationEnvironmentList getEnvironment();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList">OpsworksApplicationEnvironmentList</a>

---

##### `sslConfiguration`<sup>Required</sup> <a name="sslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfiguration"></a>

```java
public OpsworksApplicationSslConfigurationList getSslConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList">OpsworksApplicationSslConfigurationList</a>

---

##### `appSourceInput`<sup>Optional</sup> <a name="appSourceInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSourceInput"></a>

```java
public java.lang.Object getAppSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>>

---

##### `autoBundleOnDeployInput`<sup>Optional</sup> <a name="autoBundleOnDeployInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeployInput"></a>

```java
public java.lang.String getAutoBundleOnDeployInput();
```

- *Type:* java.lang.String

---

##### `awsFlowRubySettingsInput`<sup>Optional</sup> <a name="awsFlowRubySettingsInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettingsInput"></a>

```java
public java.lang.String getAwsFlowRubySettingsInput();
```

- *Type:* java.lang.String

---

##### `dataSourceArnInput`<sup>Optional</sup> <a name="dataSourceArnInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArnInput"></a>

```java
public java.lang.String getDataSourceArnInput();
```

- *Type:* java.lang.String

---

##### `dataSourceDatabaseNameInput`<sup>Optional</sup> <a name="dataSourceDatabaseNameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseNameInput"></a>

```java
public java.lang.String getDataSourceDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dataSourceTypeInput`<sup>Optional</sup> <a name="dataSourceTypeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceTypeInput"></a>

```java
public java.lang.String getDataSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `documentRootInput`<sup>Optional</sup> <a name="documentRootInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRootInput"></a>

```java
public java.lang.String getDocumentRootInput();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableSslInput`<sup>Optional</sup> <a name="enableSslInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSslInput"></a>

```java
public java.lang.Object getEnableSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environmentInput"></a>

```java
public java.lang.Object getEnvironmentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `railsEnvInput`<sup>Optional</sup> <a name="railsEnvInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnvInput"></a>

```java
public java.lang.String getRailsEnvInput();
```

- *Type:* java.lang.String

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortNameInput"></a>

```java
public java.lang.String getShortNameInput();
```

- *Type:* java.lang.String

---

##### `sslConfigurationInput`<sup>Optional</sup> <a name="sslConfigurationInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfigurationInput"></a>

```java
public java.lang.Object getSslConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>>

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackIdInput"></a>

```java
public java.lang.String getStackIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autoBundleOnDeploy`<sup>Required</sup> <a name="autoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeploy"></a>

```java
public java.lang.String getAutoBundleOnDeploy();
```

- *Type:* java.lang.String

---

##### `awsFlowRubySettings`<sup>Required</sup> <a name="awsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettings"></a>

```java
public java.lang.String getAwsFlowRubySettings();
```

- *Type:* java.lang.String

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

---

##### `dataSourceDatabaseName`<sup>Required</sup> <a name="dataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseName"></a>

```java
public java.lang.String getDataSourceDatabaseName();
```

- *Type:* java.lang.String

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceType"></a>

```java
public java.lang.String getDataSourceType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `documentRoot`<sup>Required</sup> <a name="documentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRoot"></a>

```java
public java.lang.String getDocumentRoot();
```

- *Type:* java.lang.String

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableSsl`<sup>Required</sup> <a name="enableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSsl"></a>

```java
public java.lang.Object getEnableSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `railsEnv`<sup>Required</sup> <a name="railsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnv"></a>

```java
public java.lang.String getRailsEnv();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksApplicationAppSource <a name="OpsworksApplicationAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationAppSource;

OpsworksApplicationAppSource.builder()
    .type(java.lang.String)
//  .password(java.lang.String)
//  .revision(java.lang.String)
//  .sshKey(java.lang.String)
//  .url(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#password OpsworksApplication#password}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.revision">revision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#revision OpsworksApplication#revision}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.sshKey">sshKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssh_key OpsworksApplication#ssh_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#url OpsworksApplication#url}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#username OpsworksApplication#username}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#password OpsworksApplication#password}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#revision OpsworksApplication#revision}.

---

##### `sshKey`<sup>Optional</sup> <a name="sshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.sshKey"></a>

```java
public java.lang.String getSshKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssh_key OpsworksApplication#ssh_key}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#url OpsworksApplication#url}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#username OpsworksApplication#username}.

---

### OpsworksApplicationConfig <a name="OpsworksApplicationConfig" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationConfig;

OpsworksApplicationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .stackId(java.lang.String)
    .type(java.lang.String)
//  .appSource(IResolvable)
//  .appSource(java.util.List<OpsworksApplicationAppSource>)
//  .autoBundleOnDeploy(java.lang.String)
//  .awsFlowRubySettings(java.lang.String)
//  .dataSourceArn(java.lang.String)
//  .dataSourceDatabaseName(java.lang.String)
//  .dataSourceType(java.lang.String)
//  .description(java.lang.String)
//  .documentRoot(java.lang.String)
//  .domains(java.util.List<java.lang.String>)
//  .enableSsl(java.lang.Boolean)
//  .enableSsl(IResolvable)
//  .environment(IResolvable)
//  .environment(java.util.List<OpsworksApplicationEnvironment>)
//  .id(java.lang.String)
//  .railsEnv(java.lang.String)
//  .shortName(java.lang.String)
//  .sslConfiguration(IResolvable)
//  .sslConfiguration(java.util.List<OpsworksApplicationSslConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.stackId">stackId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.appSource">appSource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>></code> | app_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.autoBundleOnDeploy">autoBundleOnDeploy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.awsFlowRubySettings">awsFlowRubySettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceDatabaseName">dataSourceDatabaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.documentRoot">documentRoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.enableSsl">enableSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.environment">environment</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.railsEnv">railsEnv</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.shortName">shortName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.sslConfiguration">sslConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>></code> | ssl_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}.

---

##### `appSource`<sup>Optional</sup> <a name="appSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.appSource"></a>

```java
public java.lang.Object getAppSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>>

app_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#app_source OpsworksApplication#app_source}

---

##### `autoBundleOnDeploy`<sup>Optional</sup> <a name="autoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.autoBundleOnDeploy"></a>

```java
public java.lang.String getAutoBundleOnDeploy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}.

---

##### `awsFlowRubySettings`<sup>Optional</sup> <a name="awsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.awsFlowRubySettings"></a>

```java
public java.lang.String getAwsFlowRubySettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}.

---

##### `dataSourceArn`<sup>Optional</sup> <a name="dataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}.

---

##### `dataSourceDatabaseName`<sup>Optional</sup> <a name="dataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceDatabaseName"></a>

```java
public java.lang.String getDataSourceDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}.

---

##### `dataSourceType`<sup>Optional</sup> <a name="dataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceType"></a>

```java
public java.lang.String getDataSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}.

---

##### `documentRoot`<sup>Optional</sup> <a name="documentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.documentRoot"></a>

```java
public java.lang.String getDocumentRoot();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}.

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}.

---

##### `enableSsl`<sup>Optional</sup> <a name="enableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.enableSsl"></a>

```java
public java.lang.Object getEnableSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.environment"></a>

```java
public java.lang.Object getEnvironment();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#environment OpsworksApplication#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `railsEnv`<sup>Optional</sup> <a name="railsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.railsEnv"></a>

```java
public java.lang.String getRailsEnv();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}.

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}.

---

##### `sslConfiguration`<sup>Optional</sup> <a name="sslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.sslConfiguration"></a>

```java
public java.lang.Object getSslConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>>

ssl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssl_configuration OpsworksApplication#ssl_configuration}

---

### OpsworksApplicationEnvironment <a name="OpsworksApplicationEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationEnvironment;

OpsworksApplicationEnvironment.builder()
    .key(java.lang.String)
    .value(java.lang.String)
//  .secure(java.lang.Boolean)
//  .secure(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#key OpsworksApplication#key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#value OpsworksApplication#value}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.secure">secure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#secure OpsworksApplication#secure}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#key OpsworksApplication#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#value OpsworksApplication#value}.

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.secure"></a>

```java
public java.lang.Object getSecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#secure OpsworksApplication#secure}.

---

### OpsworksApplicationSslConfiguration <a name="OpsworksApplicationSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationSslConfiguration;

OpsworksApplicationSslConfiguration.builder()
    .certificate(java.lang.String)
    .privateKey(java.lang.String)
//  .chain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#certificate OpsworksApplication#certificate}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#private_key OpsworksApplication#private_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.chain">chain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#chain OpsworksApplication#chain}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#certificate OpsworksApplication#certificate}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#private_key OpsworksApplication#private_key}.

---

##### `chain`<sup>Optional</sup> <a name="chain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.chain"></a>

```java
public java.lang.String getChain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#chain OpsworksApplication#chain}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksApplicationAppSourceList <a name="OpsworksApplicationAppSourceList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationAppSourceList;

new OpsworksApplicationAppSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get"></a>

```java
public OpsworksApplicationAppSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>>

---


### OpsworksApplicationAppSourceOutputReference <a name="OpsworksApplicationAppSourceOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationAppSourceOutputReference;

new OpsworksApplicationAppSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetSshKey">resetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetRevision"></a>

```java
public void resetRevision()
```

##### `resetSshKey` <a name="resetSshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetSshKey"></a>

```java
public void resetSshKey()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKeyInput">sshKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKey">sshKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `sshKeyInput`<sup>Optional</sup> <a name="sshKeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKeyInput"></a>

```java
public java.lang.String getSshKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKey"></a>

```java
public java.lang.String getSshKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksApplicationEnvironmentList <a name="OpsworksApplicationEnvironmentList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationEnvironmentList;

new OpsworksApplicationEnvironmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get"></a>

```java
public OpsworksApplicationEnvironmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>>

---


### OpsworksApplicationEnvironmentOutputReference <a name="OpsworksApplicationEnvironmentOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationEnvironmentOutputReference;

new OpsworksApplicationEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resetSecure">resetSecure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecure` <a name="resetSecure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resetSecure"></a>

```java
public void resetSecure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secureInput">secureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secure">secure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secureInput"></a>

```java
public java.lang.Object getSecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secure"></a>

```java
public java.lang.Object getSecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a> OR com.hashicorp.cdktf.IResolvable

---


### OpsworksApplicationSslConfigurationList <a name="OpsworksApplicationSslConfigurationList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationSslConfigurationList;

new OpsworksApplicationSslConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get"></a>

```java
public OpsworksApplicationSslConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>>

---


### OpsworksApplicationSslConfigurationOutputReference <a name="OpsworksApplicationSslConfigurationOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opsworks_application.OpsworksApplicationSslConfigurationOutputReference;

new OpsworksApplicationSslConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resetChain">resetChain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChain` <a name="resetChain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resetChain"></a>

```java
public void resetChain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chainInput">chainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chain">chain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `chainInput`<sup>Optional</sup> <a name="chainInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chainInput"></a>

```java
public java.lang.String getChainInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `chain`<sup>Required</sup> <a name="chain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chain"></a>

```java
public java.lang.String getChain();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a> OR com.hashicorp.cdktf.IResolvable

---



