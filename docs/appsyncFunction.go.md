# `appsyncFunction` Submodule <a name="`appsyncFunction` Submodule" id="@cdktf/provider-aws.appsyncFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncFunction <a name="AppsyncFunction" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_function aws_appsync_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

appsyncfunction.NewAppsyncFunction(scope Construct, id *string, config AppsyncFunctionConfig) AppsyncFunction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig">AppsyncFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig">AppsyncFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime">PutRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig">PutSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetFunctionVersion">ResetFunctionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetMaxBatchSize">ResetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRequestMappingTemplate">ResetRequestMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetResponseMappingTemplate">ResetResponseMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetSyncConfig">ResetSyncConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRuntime` <a name="PutRuntime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime"></a>

```go
func PutRuntime(value AppsyncFunctionRuntime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---

##### `PutSyncConfig` <a name="PutSyncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig"></a>

```go
func PutSyncConfig(value AppsyncFunctionSyncConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetCode"></a>

```go
func ResetCode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFunctionVersion` <a name="ResetFunctionVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetFunctionVersion"></a>

```go
func ResetFunctionVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxBatchSize` <a name="ResetMaxBatchSize" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetMaxBatchSize"></a>

```go
func ResetMaxBatchSize()
```

##### `ResetRequestMappingTemplate` <a name="ResetRequestMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRequestMappingTemplate"></a>

```go
func ResetRequestMappingTemplate()
```

##### `ResetResponseMappingTemplate` <a name="ResetResponseMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetResponseMappingTemplate"></a>

```go
func ResetResponseMappingTemplate()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetSyncConfig` <a name="ResetSyncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetSyncConfig"></a>

```go
func ResetSyncConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

appsyncfunction.AppsyncFunction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

appsyncfunction.AppsyncFunction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

appsyncfunction.AppsyncFunction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtime">Runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference">AppsyncFunctionRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersionInput">FunctionVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput">MaxBatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput">RequestMappingTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput">ResponseMappingTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtimeInput">RuntimeInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfigInput">SyncConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSize">MaxBatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplate">RequestMappingTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplate">ResponseMappingTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtime"></a>

```go
func Runtime() AppsyncFunctionRuntimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference">AppsyncFunctionRuntimeOutputReference</a>

---

##### `SyncConfig`<sup>Required</sup> <a name="SyncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfig"></a>

```go
func SyncConfig() AppsyncFunctionSyncConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FunctionVersionInput`<sup>Optional</sup> <a name="FunctionVersionInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersionInput"></a>

```go
func FunctionVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxBatchSizeInput`<sup>Optional</sup> <a name="MaxBatchSizeInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput"></a>

```go
func MaxBatchSizeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequestMappingTemplateInput`<sup>Optional</sup> <a name="RequestMappingTemplateInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput"></a>

```go
func RequestMappingTemplateInput() *string
```

- *Type:* *string

---

##### `ResponseMappingTemplateInput`<sup>Optional</sup> <a name="ResponseMappingTemplateInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput"></a>

```go
func ResponseMappingTemplateInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtimeInput"></a>

```go
func RuntimeInput() AppsyncFunctionRuntime
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---

##### `SyncConfigInput`<sup>Optional</sup> <a name="SyncConfigInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfigInput"></a>

```go
func SyncConfigInput() AppsyncFunctionSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FunctionVersion`<sup>Required</sup> <a name="FunctionVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersion"></a>

```go
func FunctionVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxBatchSize`<sup>Required</sup> <a name="MaxBatchSize" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSize"></a>

```go
func MaxBatchSize() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequestMappingTemplate`<sup>Required</sup> <a name="RequestMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplate"></a>

```go
func RequestMappingTemplate() *string
```

- *Type:* *string

---

##### `ResponseMappingTemplate`<sup>Required</sup> <a name="ResponseMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplate"></a>

```go
func ResponseMappingTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncFunctionConfig <a name="AppsyncFunctionConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

&appsyncfunction.AppsyncFunctionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	DataSource: *string,
	Name: *string,
	Code: *string,
	Description: *string,
	FunctionVersion: *string,
	Id: *string,
	MaxBatchSize: *f64,
	RequestMappingTemplate: *string,
	ResponseMappingTemplate: *string,
	Runtime: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncFunction.AppsyncFunctionRuntime,
	SyncConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncFunction.AppsyncFunctionSyncConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.apiId">ApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#api_id AppsyncFunction#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dataSource">DataSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#data_source AppsyncFunction#data_source}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.code">Code</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#code AppsyncFunction#code}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#description AppsyncFunction#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#function_version AppsyncFunction#function_version}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#id AppsyncFunction#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize">MaxBatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#max_batch_size AppsyncFunction#max_batch_size}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate">RequestMappingTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate">ResponseMappingTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.runtime">Runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | sync_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#api_id AppsyncFunction#api_id}.

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#data_source AppsyncFunction#data_source}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}.

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.code"></a>

```go
Code *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#code AppsyncFunction#code}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#description AppsyncFunction#description}.

---

##### `FunctionVersion`<sup>Optional</sup> <a name="FunctionVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.functionVersion"></a>

```go
FunctionVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#function_version AppsyncFunction#function_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#id AppsyncFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxBatchSize`<sup>Optional</sup> <a name="MaxBatchSize" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize"></a>

```go
MaxBatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#max_batch_size AppsyncFunction#max_batch_size}.

---

##### `RequestMappingTemplate`<sup>Optional</sup> <a name="RequestMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate"></a>

```go
RequestMappingTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}.

---

##### `ResponseMappingTemplate`<sup>Optional</sup> <a name="ResponseMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate"></a>

```go
ResponseMappingTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.runtime"></a>

```go
Runtime AppsyncFunctionRuntime
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime AppsyncFunction#runtime}

---

##### `SyncConfig`<sup>Optional</sup> <a name="SyncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.syncConfig"></a>

```go
SyncConfig AppsyncFunctionSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#sync_config AppsyncFunction#sync_config}

---

### AppsyncFunctionRuntime <a name="AppsyncFunctionRuntime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

&appsyncfunction.AppsyncFunctionRuntime {
	Name: *string,
	RuntimeVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime_version AppsyncFunction#runtime_version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}.

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime_version AppsyncFunction#runtime_version}.

---

### AppsyncFunctionSyncConfig <a name="AppsyncFunctionSyncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

&appsyncfunction.AppsyncFunctionSyncConfig {
	ConflictDetection: *string,
	ConflictHandler: *string,
	LambdaConflictHandlerConfig: github.com/cdktf/cdktf-provider-aws-go/aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection">ConflictDetection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_detection AppsyncFunction#conflict_detection}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler">ConflictHandler</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_handler AppsyncFunction#conflict_handler}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig">LambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | lambda_conflict_handler_config block. |

---

##### `ConflictDetection`<sup>Optional</sup> <a name="ConflictDetection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection"></a>

```go
ConflictDetection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_detection AppsyncFunction#conflict_detection}.

---

##### `ConflictHandler`<sup>Optional</sup> <a name="ConflictHandler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler"></a>

```go
ConflictHandler *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_handler AppsyncFunction#conflict_handler}.

---

##### `LambdaConflictHandlerConfig`<sup>Optional</sup> <a name="LambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig"></a>

```go
LambdaConflictHandlerConfig AppsyncFunctionSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_config AppsyncFunction#lambda_conflict_handler_config}

---

### AppsyncFunctionSyncConfigLambdaConflictHandlerConfig <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

&appsyncfunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig {
	LambdaConflictHandlerArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">LambdaConflictHandlerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}. |

---

##### `LambdaConflictHandlerArn`<sup>Optional</sup> <a name="LambdaConflictHandlerArn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```go
LambdaConflictHandlerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncFunctionRuntimeOutputReference <a name="AppsyncFunctionRuntimeOutputReference" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

appsyncfunction.NewAppsyncFunctionRuntimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncFunctionRuntimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncFunctionRuntime
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---


### AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

appsyncfunction.NewAppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">ResetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaConflictHandlerArn` <a name="ResetLambdaConflictHandlerArn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```go
func ResetLambdaConflictHandlerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">LambdaConflictHandlerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">LambdaConflictHandlerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="LambdaConflictHandlerArnInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```go
func LambdaConflictHandlerArnInput() *string
```

- *Type:* *string

---

##### `LambdaConflictHandlerArn`<sup>Required</sup> <a name="LambdaConflictHandlerArn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```go
func LambdaConflictHandlerArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncFunctionSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncFunctionSyncConfigOutputReference <a name="AppsyncFunctionSyncConfigOutputReference" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appsyncfunction"

appsyncfunction.NewAppsyncFunctionSyncConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncFunctionSyncConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig">PutLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection">ResetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler">ResetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig">ResetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaConflictHandlerConfig` <a name="PutLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```go
func PutLambdaConflictHandlerConfig(value AppsyncFunctionSyncConfigLambdaConflictHandlerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---

##### `ResetConflictDetection` <a name="ResetConflictDetection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection"></a>

```go
func ResetConflictDetection()
```

##### `ResetConflictHandler` <a name="ResetConflictHandler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler"></a>

```go
func ResetConflictHandler()
```

##### `ResetLambdaConflictHandlerConfig` <a name="ResetLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```go
func ResetLambdaConflictHandlerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig">LambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput">ConflictDetectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput">ConflictHandlerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">LambdaConflictHandlerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection">ConflictDetection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler">ConflictHandler</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaConflictHandlerConfig`<sup>Required</sup> <a name="LambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```go
func LambdaConflictHandlerConfig() AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `ConflictDetectionInput`<sup>Optional</sup> <a name="ConflictDetectionInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput"></a>

```go
func ConflictDetectionInput() *string
```

- *Type:* *string

---

##### `ConflictHandlerInput`<sup>Optional</sup> <a name="ConflictHandlerInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput"></a>

```go
func ConflictHandlerInput() *string
```

- *Type:* *string

---

##### `LambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="LambdaConflictHandlerConfigInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```go
func LambdaConflictHandlerConfigInput() AppsyncFunctionSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---

##### `ConflictDetection`<sup>Required</sup> <a name="ConflictDetection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection"></a>

```go
func ConflictDetection() *string
```

- *Type:* *string

---

##### `ConflictHandler`<sup>Required</sup> <a name="ConflictHandler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler"></a>

```go
func ConflictHandler() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppsyncFunctionSyncConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---



