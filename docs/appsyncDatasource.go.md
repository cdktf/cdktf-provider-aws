# `appsyncDatasource` Submodule <a name="`appsyncDatasource` Submodule" id="@cdktf/provider-aws.appsyncDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncDatasource <a name="AppsyncDatasource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource aws_appsync_datasource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasource(scope Construct, id *string, config AppsyncDatasourceConfig) AppsyncDatasource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig">AppsyncDatasourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig">AppsyncDatasourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig">PutDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig">PutElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putEventBridgeConfig">PutEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig">PutHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig">PutLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig">PutRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDynamodbConfig">ResetDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetElasticsearchConfig">ResetElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetEventBridgeConfig">ResetEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetHttpConfig">ResetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetLambdaConfig">ResetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetRelationalDatabaseConfig">ResetRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetServiceRoleArn">ResetServiceRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDynamodbConfig` <a name="PutDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig"></a>

```go
func PutDynamodbConfig(value AppsyncDatasourceDynamodbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---

##### `PutElasticsearchConfig` <a name="PutElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig"></a>

```go
func PutElasticsearchConfig(value AppsyncDatasourceElasticsearchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---

##### `PutEventBridgeConfig` <a name="PutEventBridgeConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putEventBridgeConfig"></a>

```go
func PutEventBridgeConfig(value AppsyncDatasourceEventBridgeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putEventBridgeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig">AppsyncDatasourceEventBridgeConfig</a>

---

##### `PutHttpConfig` <a name="PutHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig"></a>

```go
func PutHttpConfig(value AppsyncDatasourceHttpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---

##### `PutLambdaConfig` <a name="PutLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig"></a>

```go
func PutLambdaConfig(value AppsyncDatasourceLambdaConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---

##### `PutRelationalDatabaseConfig` <a name="PutRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig"></a>

```go
func PutRelationalDatabaseConfig(value AppsyncDatasourceRelationalDatabaseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDynamodbConfig` <a name="ResetDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDynamodbConfig"></a>

```go
func ResetDynamodbConfig()
```

##### `ResetElasticsearchConfig` <a name="ResetElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetElasticsearchConfig"></a>

```go
func ResetElasticsearchConfig()
```

##### `ResetEventBridgeConfig` <a name="ResetEventBridgeConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetEventBridgeConfig"></a>

```go
func ResetEventBridgeConfig()
```

##### `ResetHttpConfig` <a name="ResetHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetHttpConfig"></a>

```go
func ResetHttpConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetId"></a>

```go
func ResetId()
```

##### `ResetLambdaConfig` <a name="ResetLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetLambdaConfig"></a>

```go
func ResetLambdaConfig()
```

##### `ResetRelationalDatabaseConfig` <a name="ResetRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetRelationalDatabaseConfig"></a>

```go
func ResetRelationalDatabaseConfig()
```

##### `ResetServiceRoleArn` <a name="ResetServiceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetServiceRoleArn"></a>

```go
func ResetServiceRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.AppsyncDatasource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.AppsyncDatasource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.AppsyncDatasource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfig">DynamodbConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference">AppsyncDatasourceDynamodbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfig">ElasticsearchConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference">AppsyncDatasourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.eventBridgeConfig">EventBridgeConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference">AppsyncDatasourceEventBridgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfig">HttpConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference">AppsyncDatasourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference">AppsyncDatasourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfig">RelationalDatabaseConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfigInput">DynamodbConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfigInput">ElasticsearchConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.eventBridgeConfigInput">EventBridgeConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig">AppsyncDatasourceEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfigInput">HttpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfigInput">LambdaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfigInput">RelationalDatabaseConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DynamodbConfig`<sup>Required</sup> <a name="DynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfig"></a>

```go
func DynamodbConfig() AppsyncDatasourceDynamodbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference">AppsyncDatasourceDynamodbConfigOutputReference</a>

---

##### `ElasticsearchConfig`<sup>Required</sup> <a name="ElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfig"></a>

```go
func ElasticsearchConfig() AppsyncDatasourceElasticsearchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference">AppsyncDatasourceElasticsearchConfigOutputReference</a>

---

##### `EventBridgeConfig`<sup>Required</sup> <a name="EventBridgeConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.eventBridgeConfig"></a>

```go
func EventBridgeConfig() AppsyncDatasourceEventBridgeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference">AppsyncDatasourceEventBridgeConfigOutputReference</a>

---

##### `HttpConfig`<sup>Required</sup> <a name="HttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfig"></a>

```go
func HttpConfig() AppsyncDatasourceHttpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference">AppsyncDatasourceHttpConfigOutputReference</a>

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfig"></a>

```go
func LambdaConfig() AppsyncDatasourceLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference">AppsyncDatasourceLambdaConfigOutputReference</a>

---

##### `RelationalDatabaseConfig`<sup>Required</sup> <a name="RelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfig"></a>

```go
func RelationalDatabaseConfig() AppsyncDatasourceRelationalDatabaseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigOutputReference</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DynamodbConfigInput`<sup>Optional</sup> <a name="DynamodbConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfigInput"></a>

```go
func DynamodbConfigInput() AppsyncDatasourceDynamodbConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---

##### `ElasticsearchConfigInput`<sup>Optional</sup> <a name="ElasticsearchConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfigInput"></a>

```go
func ElasticsearchConfigInput() AppsyncDatasourceElasticsearchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---

##### `EventBridgeConfigInput`<sup>Optional</sup> <a name="EventBridgeConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.eventBridgeConfigInput"></a>

```go
func EventBridgeConfigInput() AppsyncDatasourceEventBridgeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig">AppsyncDatasourceEventBridgeConfig</a>

---

##### `HttpConfigInput`<sup>Optional</sup> <a name="HttpConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfigInput"></a>

```go
func HttpConfigInput() AppsyncDatasourceHttpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LambdaConfigInput`<sup>Optional</sup> <a name="LambdaConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfigInput"></a>

```go
func LambdaConfigInput() AppsyncDatasourceLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RelationalDatabaseConfigInput`<sup>Optional</sup> <a name="RelationalDatabaseConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfigInput"></a>

```go
func RelationalDatabaseConfigInput() AppsyncDatasourceRelationalDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArnInput"></a>

```go
func ServiceRoleArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArn"></a>

```go
func ServiceRoleArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncDatasourceConfig <a name="AppsyncDatasourceConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	Name: *string,
	Type: *string,
	Description: *string,
	DynamodbConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig,
	ElasticsearchConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig,
	EventBridgeConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig,
	HttpConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceHttpConfig,
	Id: *string,
	LambdaConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceLambdaConfig,
	RelationalDatabaseConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig,
	ServiceRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.apiId">ApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dynamodbConfig">DynamodbConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | dynamodb_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.elasticsearchConfig">ElasticsearchConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | elasticsearch_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.eventBridgeConfig">EventBridgeConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig">AppsyncDatasourceEventBridgeConfig</a></code> | event_bridge_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.httpConfig">HttpConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | http_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.relationalDatabaseConfig">RelationalDatabaseConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | relational_database_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}.

---

##### `DynamodbConfig`<sup>Optional</sup> <a name="DynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dynamodbConfig"></a>

```go
DynamodbConfig AppsyncDatasourceDynamodbConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

dynamodb_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#dynamodb_config AppsyncDatasource#dynamodb_config}

---

##### `ElasticsearchConfig`<sup>Optional</sup> <a name="ElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.elasticsearchConfig"></a>

```go
ElasticsearchConfig AppsyncDatasourceElasticsearchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

elasticsearch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#elasticsearch_config AppsyncDatasource#elasticsearch_config}

---

##### `EventBridgeConfig`<sup>Optional</sup> <a name="EventBridgeConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.eventBridgeConfig"></a>

```go
EventBridgeConfig AppsyncDatasourceEventBridgeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig">AppsyncDatasourceEventBridgeConfig</a>

event_bridge_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#event_bridge_config AppsyncDatasource#event_bridge_config}

---

##### `HttpConfig`<sup>Optional</sup> <a name="HttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.httpConfig"></a>

```go
HttpConfig AppsyncDatasourceHttpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

http_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_config AppsyncDatasource#http_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LambdaConfig`<sup>Optional</sup> <a name="LambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lambdaConfig"></a>

```go
LambdaConfig AppsyncDatasourceLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#lambda_config AppsyncDatasource#lambda_config}

---

##### `RelationalDatabaseConfig`<sup>Optional</sup> <a name="RelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.relationalDatabaseConfig"></a>

```go
RelationalDatabaseConfig AppsyncDatasourceRelationalDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

relational_database_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#relational_database_config AppsyncDatasource#relational_database_config}

---

##### `ServiceRoleArn`<sup>Optional</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.serviceRoleArn"></a>

```go
ServiceRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}.

---

### AppsyncDatasourceDynamodbConfig <a name="AppsyncDatasourceDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceDynamodbConfig {
	TableName: *string,
	DeltaSyncConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig,
	Region: *string,
	UseCallerCredentials: interface{},
	Versioned: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.deltaSyncConfig">DeltaSyncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | delta_sync_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.useCallerCredentials">UseCallerCredentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.versioned">Versioned</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}.

---

##### `DeltaSyncConfig`<sup>Optional</sup> <a name="DeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.deltaSyncConfig"></a>

```go
DeltaSyncConfig AppsyncDatasourceDynamodbConfigDeltaSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

delta_sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_config AppsyncDatasource#delta_sync_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

##### `UseCallerCredentials`<sup>Optional</sup> <a name="UseCallerCredentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.useCallerCredentials"></a>

```go
UseCallerCredentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}.

---

##### `Versioned`<sup>Optional</sup> <a name="Versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.versioned"></a>

```go
Versioned interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}.

---

### AppsyncDatasourceDynamodbConfigDeltaSyncConfig <a name="AppsyncDatasourceDynamodbConfigDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig {
	DeltaSyncTableName: *string,
	BaseTableTtl: *f64,
	DeltaSyncTableTtl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName">DeltaSyncTableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl">BaseTableTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl">DeltaSyncTableTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}. |

---

##### `DeltaSyncTableName`<sup>Required</sup> <a name="DeltaSyncTableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

```go
DeltaSyncTableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}.

---

##### `BaseTableTtl`<sup>Optional</sup> <a name="BaseTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl"></a>

```go
BaseTableTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}.

---

##### `DeltaSyncTableTtl`<sup>Optional</sup> <a name="DeltaSyncTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

```go
DeltaSyncTableTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}.

---

### AppsyncDatasourceElasticsearchConfig <a name="AppsyncDatasourceElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceElasticsearchConfig {
	Endpoint: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

### AppsyncDatasourceEventBridgeConfig <a name="AppsyncDatasourceEventBridgeConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceEventBridgeConfig {
	EventBusArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig.property.eventBusArn">EventBusArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#event_bus_arn AppsyncDatasource#event_bus_arn}. |

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig.property.eventBusArn"></a>

```go
EventBusArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#event_bus_arn AppsyncDatasource#event_bus_arn}.

---

### AppsyncDatasourceHttpConfig <a name="AppsyncDatasourceHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceHttpConfig {
	Endpoint: *string,
	AuthorizationConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | authorization_config block. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.authorizationConfig"></a>

```go
AuthorizationConfig AppsyncDatasourceHttpConfigAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_config AppsyncDatasource#authorization_config}

---

### AppsyncDatasourceHttpConfigAuthorizationConfig <a name="AppsyncDatasourceHttpConfigAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceHttpConfigAuthorizationConfig {
	AuthorizationType: *string,
	AwsIamConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.awsIamConfig">AwsIamConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | aws_iam_config block. |

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

```go
AuthorizationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}.

---

##### `AwsIamConfig`<sup>Optional</sup> <a name="AwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

```go
AwsIamConfig AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

aws_iam_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_iam_config AppsyncDatasource#aws_iam_config}

---

### AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig <a name="AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig {
	SigningRegion: *string,
	SigningServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion">SigningRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName">SigningServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}. |

---

##### `SigningRegion`<sup>Optional</sup> <a name="SigningRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

```go
SigningRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}.

---

##### `SigningServiceName`<sup>Optional</sup> <a name="SigningServiceName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

```go
SigningServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}.

---

### AppsyncDatasourceLambdaConfig <a name="AppsyncDatasourceLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceLambdaConfig {
	FunctionArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.property.functionArn">FunctionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}. |

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.property.functionArn"></a>

```go
FunctionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}.

---

### AppsyncDatasourceRelationalDatabaseConfig <a name="AppsyncDatasourceRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceRelationalDatabaseConfig {
	HttpEndpointConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig,
	SourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.httpEndpointConfig">HttpEndpointConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | http_endpoint_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}. |

---

##### `HttpEndpointConfig`<sup>Optional</sup> <a name="HttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.httpEndpointConfig"></a>

```go
HttpEndpointConfig AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

http_endpoint_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_endpoint_config AppsyncDatasource#http_endpoint_config}

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}.

---

### AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig <a name="AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

&appsyncdatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig {
	AwsSecretStoreArn: *string,
	DbClusterIdentifier: *string,
	DatabaseName: *string,
	Region: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.awsSecretStoreArn">AwsSecretStoreArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}. |

---

##### `AwsSecretStoreArn`<sup>Required</sup> <a name="AwsSecretStoreArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.awsSecretStoreArn"></a>

```go
AwsSecretStoreArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}.

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.dbClusterIdentifier"></a>

```go
DbClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference <a name="AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl">ResetBaseTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl">ResetDeltaSyncTableTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseTableTtl` <a name="ResetBaseTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl"></a>

```go
func ResetBaseTableTtl()
```

##### `ResetDeltaSyncTableTtl` <a name="ResetDeltaSyncTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl"></a>

```go
func ResetDeltaSyncTableTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput">BaseTableTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput">DeltaSyncTableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput">DeltaSyncTableTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">BaseTableTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">DeltaSyncTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">DeltaSyncTableTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseTableTtlInput`<sup>Optional</sup> <a name="BaseTableTtlInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput"></a>

```go
func BaseTableTtlInput() *f64
```

- *Type:* *f64

---

##### `DeltaSyncTableNameInput`<sup>Optional</sup> <a name="DeltaSyncTableNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput"></a>

```go
func DeltaSyncTableNameInput() *string
```

- *Type:* *string

---

##### `DeltaSyncTableTtlInput`<sup>Optional</sup> <a name="DeltaSyncTableTtlInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput"></a>

```go
func DeltaSyncTableTtlInput() *f64
```

- *Type:* *f64

---

##### `BaseTableTtl`<sup>Required</sup> <a name="BaseTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```go
func BaseTableTtl() *f64
```

- *Type:* *f64

---

##### `DeltaSyncTableName`<sup>Required</sup> <a name="DeltaSyncTableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```go
func DeltaSyncTableName() *string
```

- *Type:* *string

---

##### `DeltaSyncTableTtl`<sup>Required</sup> <a name="DeltaSyncTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```go
func DeltaSyncTableTtl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceDynamodbConfigDeltaSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---


### AppsyncDatasourceDynamodbConfigOutputReference <a name="AppsyncDatasourceDynamodbConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceDynamodbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceDynamodbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig">PutDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetDeltaSyncConfig">ResetDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetUseCallerCredentials">ResetUseCallerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetVersioned">ResetVersioned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaSyncConfig` <a name="PutDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig"></a>

```go
func PutDeltaSyncConfig(value AppsyncDatasourceDynamodbConfigDeltaSyncConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---

##### `ResetDeltaSyncConfig` <a name="ResetDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetDeltaSyncConfig"></a>

```go
func ResetDeltaSyncConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetUseCallerCredentials` <a name="ResetUseCallerCredentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetUseCallerCredentials"></a>

```go
func ResetUseCallerCredentials()
```

##### `ResetVersioned` <a name="ResetVersioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetVersioned"></a>

```go
func ResetVersioned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfig">DeltaSyncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference">AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfigInput">DeltaSyncConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentialsInput">UseCallerCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versionedInput">VersionedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentials">UseCallerCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versioned">Versioned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaSyncConfig`<sup>Required</sup> <a name="DeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfig"></a>

```go
func DeltaSyncConfig() AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference">AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference</a>

---

##### `DeltaSyncConfigInput`<sup>Optional</sup> <a name="DeltaSyncConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfigInput"></a>

```go
func DeltaSyncConfigInput() AppsyncDatasourceDynamodbConfigDeltaSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `UseCallerCredentialsInput`<sup>Optional</sup> <a name="UseCallerCredentialsInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentialsInput"></a>

```go
func UseCallerCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionedInput`<sup>Optional</sup> <a name="VersionedInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versionedInput"></a>

```go
func VersionedInput() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `UseCallerCredentials`<sup>Required</sup> <a name="UseCallerCredentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentials"></a>

```go
func UseCallerCredentials() interface{}
```

- *Type:* interface{}

---

##### `Versioned`<sup>Required</sup> <a name="Versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versioned"></a>

```go
func Versioned() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceDynamodbConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---


### AppsyncDatasourceElasticsearchConfigOutputReference <a name="AppsyncDatasourceElasticsearchConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceElasticsearchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceElasticsearchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceElasticsearchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---


### AppsyncDatasourceEventBridgeConfigOutputReference <a name="AppsyncDatasourceEventBridgeConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceEventBridgeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceEventBridgeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.eventBusArnInput">EventBusArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig">AppsyncDatasourceEventBridgeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.eventBusArnInput"></a>

```go
func EventBusArnInput() *string
```

- *Type:* *string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.eventBusArn"></a>

```go
func EventBusArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceEventBridgeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceEventBridgeConfig">AppsyncDatasourceEventBridgeConfig</a>

---


### AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion">ResetSigningRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName">ResetSigningServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSigningRegion` <a name="ResetSigningRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion"></a>

```go
func ResetSigningRegion()
```

##### `ResetSigningServiceName` <a name="ResetSigningServiceName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName"></a>

```go
func ResetSigningServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput">SigningRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput">SigningServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">SigningRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">SigningServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SigningRegionInput`<sup>Optional</sup> <a name="SigningRegionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput"></a>

```go
func SigningRegionInput() *string
```

- *Type:* *string

---

##### `SigningServiceNameInput`<sup>Optional</sup> <a name="SigningServiceNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput"></a>

```go
func SigningServiceNameInput() *string
```

- *Type:* *string

---

##### `SigningRegion`<sup>Required</sup> <a name="SigningRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```go
func SigningRegion() *string
```

- *Type:* *string

---

##### `SigningServiceName`<sup>Required</sup> <a name="SigningServiceName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```go
func SigningServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference <a name="AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceHttpConfigAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig">PutAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig">ResetAwsIamConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsIamConfig` <a name="PutAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig"></a>

```go
func PutAwsIamConfig(value AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType"></a>

```go
func ResetAuthorizationType()
```

##### `ResetAwsIamConfig` <a name="ResetAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig"></a>

```go
func ResetAwsIamConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">AwsIamConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput">AwsIamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsIamConfig`<sup>Required</sup> <a name="AwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```go
func AwsIamConfig() AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput"></a>

```go
func AuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `AwsIamConfigInput`<sup>Optional</sup> <a name="AwsIamConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput"></a>

```go
func AwsIamConfigInput() AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceHttpConfigAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---


### AppsyncDatasourceHttpConfigOutputReference <a name="AppsyncDatasourceHttpConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceHttpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceHttpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value AppsyncDatasourceHttpConfigAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() AppsyncDatasourceHttpConfigAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceHttpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---


### AppsyncDatasourceLambdaConfigOutputReference <a name="AppsyncDatasourceLambdaConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceLambdaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceLambdaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArnInput"></a>

```go
func FunctionArnInput() *string
```

- *Type:* *string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---


### AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference <a name="AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput">AwsSecretStoreArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArn">AwsSecretStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsSecretStoreArnInput`<sup>Optional</sup> <a name="AwsSecretStoreArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput"></a>

```go
func AwsSecretStoreArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput"></a>

```go
func DbClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `AwsSecretStoreArn`<sup>Required</sup> <a name="AwsSecretStoreArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```go
func AwsSecretStoreArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```go
func DbClusterIdentifier() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---


### AppsyncDatasourceRelationalDatabaseConfigOutputReference <a name="AppsyncDatasourceRelationalDatabaseConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncdatasource"

appsyncdatasource.NewAppsyncDatasourceRelationalDatabaseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncDatasourceRelationalDatabaseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig">PutHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetHttpEndpointConfig">ResetHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetSourceType">ResetSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpEndpointConfig` <a name="PutHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig"></a>

```go
func PutHttpEndpointConfig(value AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---

##### `ResetHttpEndpointConfig` <a name="ResetHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetHttpEndpointConfig"></a>

```go
func ResetHttpEndpointConfig()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetSourceType"></a>

```go
func ResetSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfig">HttpEndpointConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfigInput">HttpEndpointConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpointConfig`<sup>Required</sup> <a name="HttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfig"></a>

```go
func HttpEndpointConfig() AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference</a>

---

##### `HttpEndpointConfigInput`<sup>Optional</sup> <a name="HttpEndpointConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfigInput"></a>

```go
func HttpEndpointConfigInput() AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncDatasourceRelationalDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---



