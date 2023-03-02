# `opsworksApplication` Submodule <a name="`opsworksApplication` Submodule" id="@cdktf/provider-aws.opsworksApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksApplication <a name="OpsworksApplication" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application aws_opsworks_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.NewOpsworksApplication(scope Construct, id *string, config OpsworksApplicationConfig) OpsworksApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig">OpsworksApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig">OpsworksApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource">PutAppSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration">PutSslConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAppSource">ResetAppSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAutoBundleOnDeploy">ResetAutoBundleOnDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAwsFlowRubySettings">ResetAwsFlowRubySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceArn">ResetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceDatabaseName">ResetDataSourceDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceType">ResetDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDocumentRoot">ResetDocumentRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnableSsl">ResetEnableSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetRailsEnv">ResetRailsEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetShortName">ResetShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetSslConfiguration">ResetSslConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAppSource` <a name="PutAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource"></a>

```go
func PutAppSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment"></a>

```go
func PutEnvironment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSslConfiguration` <a name="PutSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration"></a>

```go
func PutSslConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppSource` <a name="ResetAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAppSource"></a>

```go
func ResetAppSource()
```

##### `ResetAutoBundleOnDeploy` <a name="ResetAutoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAutoBundleOnDeploy"></a>

```go
func ResetAutoBundleOnDeploy()
```

##### `ResetAwsFlowRubySettings` <a name="ResetAwsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAwsFlowRubySettings"></a>

```go
func ResetAwsFlowRubySettings()
```

##### `ResetDataSourceArn` <a name="ResetDataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceArn"></a>

```go
func ResetDataSourceArn()
```

##### `ResetDataSourceDatabaseName` <a name="ResetDataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceDatabaseName"></a>

```go
func ResetDataSourceDatabaseName()
```

##### `ResetDataSourceType` <a name="ResetDataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceType"></a>

```go
func ResetDataSourceType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDocumentRoot` <a name="ResetDocumentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDocumentRoot"></a>

```go
func ResetDocumentRoot()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDomains"></a>

```go
func ResetDomains()
```

##### `ResetEnableSsl` <a name="ResetEnableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnableSsl"></a>

```go
func ResetEnableSsl()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetRailsEnv` <a name="ResetRailsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetRailsEnv"></a>

```go
func ResetRailsEnv()
```

##### `ResetShortName` <a name="ResetShortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetShortName"></a>

```go
func ResetShortName()
```

##### `ResetSslConfiguration` <a name="ResetSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetSslConfiguration"></a>

```go
func ResetSslConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.OpsworksApplication_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.OpsworksApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.OpsworksApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSource">AppSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList">OpsworksApplicationAppSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList">OpsworksApplicationEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList">OpsworksApplicationSslConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSourceInput">AppSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeployInput">AutoBundleOnDeployInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettingsInput">AwsFlowRubySettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseNameInput">DataSourceDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceTypeInput">DataSourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRootInput">DocumentRootInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domainsInput">DomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSslInput">EnableSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environmentInput">EnvironmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnvInput">RailsEnvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortNameInput">ShortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfigurationInput">SslConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackIdInput">StackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeploy">AutoBundleOnDeploy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettings">AwsFlowRubySettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseName">DataSourceDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRoot">DocumentRoot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSsl">EnableSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnv">RailsEnv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppSource`<sup>Required</sup> <a name="AppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSource"></a>

```go
func AppSource() OpsworksApplicationAppSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList">OpsworksApplicationAppSourceList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environment"></a>

```go
func Environment() OpsworksApplicationEnvironmentList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList">OpsworksApplicationEnvironmentList</a>

---

##### `SslConfiguration`<sup>Required</sup> <a name="SslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfiguration"></a>

```go
func SslConfiguration() OpsworksApplicationSslConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList">OpsworksApplicationSslConfigurationList</a>

---

##### `AppSourceInput`<sup>Optional</sup> <a name="AppSourceInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSourceInput"></a>

```go
func AppSourceInput() interface{}
```

- *Type:* interface{}

---

##### `AutoBundleOnDeployInput`<sup>Optional</sup> <a name="AutoBundleOnDeployInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeployInput"></a>

```go
func AutoBundleOnDeployInput() *string
```

- *Type:* *string

---

##### `AwsFlowRubySettingsInput`<sup>Optional</sup> <a name="AwsFlowRubySettingsInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettingsInput"></a>

```go
func AwsFlowRubySettingsInput() *string
```

- *Type:* *string

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArnInput"></a>

```go
func DataSourceArnInput() *string
```

- *Type:* *string

---

##### `DataSourceDatabaseNameInput`<sup>Optional</sup> <a name="DataSourceDatabaseNameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseNameInput"></a>

```go
func DataSourceDatabaseNameInput() *string
```

- *Type:* *string

---

##### `DataSourceTypeInput`<sup>Optional</sup> <a name="DataSourceTypeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceTypeInput"></a>

```go
func DataSourceTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DocumentRootInput`<sup>Optional</sup> <a name="DocumentRootInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRootInput"></a>

```go
func DocumentRootInput() *string
```

- *Type:* *string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domainsInput"></a>

```go
func DomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableSslInput`<sup>Optional</sup> <a name="EnableSslInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSslInput"></a>

```go
func EnableSslInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environmentInput"></a>

```go
func EnvironmentInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RailsEnvInput`<sup>Optional</sup> <a name="RailsEnvInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnvInput"></a>

```go
func RailsEnvInput() *string
```

- *Type:* *string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortNameInput"></a>

```go
func ShortNameInput() *string
```

- *Type:* *string

---

##### `SslConfigurationInput`<sup>Optional</sup> <a name="SslConfigurationInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfigurationInput"></a>

```go
func SslConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackIdInput"></a>

```go
func StackIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AutoBundleOnDeploy`<sup>Required</sup> <a name="AutoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeploy"></a>

```go
func AutoBundleOnDeploy() *string
```

- *Type:* *string

---

##### `AwsFlowRubySettings`<sup>Required</sup> <a name="AwsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettings"></a>

```go
func AwsFlowRubySettings() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `DataSourceDatabaseName`<sup>Required</sup> <a name="DataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseName"></a>

```go
func DataSourceDatabaseName() *string
```

- *Type:* *string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceType"></a>

```go
func DataSourceType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DocumentRoot`<sup>Required</sup> <a name="DocumentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRoot"></a>

```go
func DocumentRoot() *string
```

- *Type:* *string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `EnableSsl`<sup>Required</sup> <a name="EnableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSsl"></a>

```go
func EnableSsl() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RailsEnv`<sup>Required</sup> <a name="RailsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnv"></a>

```go
func RailsEnv() *string
```

- *Type:* *string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksApplicationAppSource <a name="OpsworksApplicationAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

&opsworksapplication.OpsworksApplicationAppSource {
	Type: *string,
	Password: *string,
	Revision: *string,
	SshKey: *string,
	Url: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#password OpsworksApplication#password}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.revision">Revision</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#revision OpsworksApplication#revision}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.sshKey">SshKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssh_key OpsworksApplication#ssh_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#url OpsworksApplication#url}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#username OpsworksApplication#username}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#password OpsworksApplication#password}.

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#revision OpsworksApplication#revision}.

---

##### `SshKey`<sup>Optional</sup> <a name="SshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.sshKey"></a>

```go
SshKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssh_key OpsworksApplication#ssh_key}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#url OpsworksApplication#url}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#username OpsworksApplication#username}.

---

### OpsworksApplicationConfig <a name="OpsworksApplicationConfig" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

&opsworksapplication.OpsworksApplicationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	StackId: *string,
	Type: *string,
	AppSource: interface{},
	AutoBundleOnDeploy: *string,
	AwsFlowRubySettings: *string,
	DataSourceArn: *string,
	DataSourceDatabaseName: *string,
	DataSourceType: *string,
	Description: *string,
	DocumentRoot: *string,
	Domains: *[]*string,
	EnableSsl: interface{},
	Environment: interface{},
	Id: *string,
	RailsEnv: *string,
	ShortName: *string,
	SslConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.stackId">StackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.appSource">AppSource</a></code> | <code>interface{}</code> | app_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.autoBundleOnDeploy">AutoBundleOnDeploy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.awsFlowRubySettings">AwsFlowRubySettings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceDatabaseName">DataSourceDatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.documentRoot">DocumentRoot</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.domains">Domains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.enableSsl">EnableSsl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.environment">Environment</a></code> | <code>interface{}</code> | environment block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.railsEnv">RailsEnv</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.shortName">ShortName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.sslConfiguration">SslConfiguration</a></code> | <code>interface{}</code> | ssl_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}.

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.stackId"></a>

```go
StackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}.

---

##### `AppSource`<sup>Optional</sup> <a name="AppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.appSource"></a>

```go
AppSource interface{}
```

- *Type:* interface{}

app_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#app_source OpsworksApplication#app_source}

---

##### `AutoBundleOnDeploy`<sup>Optional</sup> <a name="AutoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.autoBundleOnDeploy"></a>

```go
AutoBundleOnDeploy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}.

---

##### `AwsFlowRubySettings`<sup>Optional</sup> <a name="AwsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.awsFlowRubySettings"></a>

```go
AwsFlowRubySettings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}.

---

##### `DataSourceArn`<sup>Optional</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceArn"></a>

```go
DataSourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}.

---

##### `DataSourceDatabaseName`<sup>Optional</sup> <a name="DataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceDatabaseName"></a>

```go
DataSourceDatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}.

---

##### `DataSourceType`<sup>Optional</sup> <a name="DataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceType"></a>

```go
DataSourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}.

---

##### `DocumentRoot`<sup>Optional</sup> <a name="DocumentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.documentRoot"></a>

```go
DocumentRoot *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}.

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.domains"></a>

```go
Domains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}.

---

##### `EnableSsl`<sup>Optional</sup> <a name="EnableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.enableSsl"></a>

```go
EnableSsl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.environment"></a>

```go
Environment interface{}
```

- *Type:* interface{}

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#environment OpsworksApplication#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RailsEnv`<sup>Optional</sup> <a name="RailsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.railsEnv"></a>

```go
RailsEnv *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}.

---

##### `ShortName`<sup>Optional</sup> <a name="ShortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.shortName"></a>

```go
ShortName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}.

---

##### `SslConfiguration`<sup>Optional</sup> <a name="SslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.sslConfiguration"></a>

```go
SslConfiguration interface{}
```

- *Type:* interface{}

ssl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssl_configuration OpsworksApplication#ssl_configuration}

---

### OpsworksApplicationEnvironment <a name="OpsworksApplicationEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

&opsworksapplication.OpsworksApplicationEnvironment {
	Key: *string,
	Value: *string,
	Secure: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#key OpsworksApplication#key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#value OpsworksApplication#value}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.secure">Secure</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#secure OpsworksApplication#secure}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#key OpsworksApplication#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#value OpsworksApplication#value}.

---

##### `Secure`<sup>Optional</sup> <a name="Secure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.secure"></a>

```go
Secure interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#secure OpsworksApplication#secure}.

---

### OpsworksApplicationSslConfiguration <a name="OpsworksApplicationSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

&opsworksapplication.OpsworksApplicationSslConfiguration {
	Certificate: *string,
	PrivateKey: *string,
	Chain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#certificate OpsworksApplication#certificate}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#private_key OpsworksApplication#private_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.chain">Chain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#chain OpsworksApplication#chain}. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#certificate OpsworksApplication#certificate}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#private_key OpsworksApplication#private_key}.

---

##### `Chain`<sup>Optional</sup> <a name="Chain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.chain"></a>

```go
Chain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#chain OpsworksApplication#chain}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksApplicationAppSourceList <a name="OpsworksApplicationAppSourceList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.NewOpsworksApplicationAppSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksApplicationAppSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get"></a>

```go
func Get(index *f64) OpsworksApplicationAppSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksApplicationAppSourceOutputReference <a name="OpsworksApplicationAppSourceOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.NewOpsworksApplicationAppSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksApplicationAppSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetSshKey">ResetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetRevision"></a>

```go
func ResetRevision()
```

##### `ResetSshKey` <a name="ResetSshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetSshKey"></a>

```go
func ResetSshKey()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKeyInput">SshKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKey">SshKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `SshKeyInput`<sup>Optional</sup> <a name="SshKeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKeyInput"></a>

```go
func SshKeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `SshKey`<sup>Required</sup> <a name="SshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKey"></a>

```go
func SshKey() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksApplicationEnvironmentList <a name="OpsworksApplicationEnvironmentList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.NewOpsworksApplicationEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksApplicationEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get"></a>

```go
func Get(index *f64) OpsworksApplicationEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksApplicationEnvironmentOutputReference <a name="OpsworksApplicationEnvironmentOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.NewOpsworksApplicationEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksApplicationEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resetSecure">ResetSecure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecure` <a name="ResetSecure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resetSecure"></a>

```go
func ResetSecure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secureInput">SecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secure">Secure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SecureInput`<sup>Optional</sup> <a name="SecureInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secureInput"></a>

```go
func SecureInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secure"></a>

```go
func Secure() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksApplicationSslConfigurationList <a name="OpsworksApplicationSslConfigurationList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.NewOpsworksApplicationSslConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsworksApplicationSslConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get"></a>

```go
func Get(index *f64) OpsworksApplicationSslConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsworksApplicationSslConfigurationOutputReference <a name="OpsworksApplicationSslConfigurationOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksapplication"

opsworksapplication.NewOpsworksApplicationSslConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsworksApplicationSslConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resetChain">ResetChain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChain` <a name="ResetChain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resetChain"></a>

```go
func ResetChain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chainInput">ChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chain">Chain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `ChainInput`<sup>Optional</sup> <a name="ChainInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chainInput"></a>

```go
func ChainInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Chain`<sup>Required</sup> <a name="Chain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chain"></a>

```go
func Chain() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



