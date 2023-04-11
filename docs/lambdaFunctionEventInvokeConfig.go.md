# `lambdaFunctionEventInvokeConfig` Submodule <a name="`lambdaFunctionEventInvokeConfig` Submodule" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunctionEventInvokeConfig <a name="LambdaFunctionEventInvokeConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config aws_lambda_function_event_invoke_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

lambdafunctioneventinvokeconfig.NewLambdaFunctionEventInvokeConfig(scope Construct, id *string, config LambdaFunctionEventInvokeConfigConfig) LambdaFunctionEventInvokeConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig">LambdaFunctionEventInvokeConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig">LambdaFunctionEventInvokeConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig">PutDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetDestinationConfig">ResetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumEventAgeInSeconds">ResetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumRetryAttempts">ResetMaximumRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetQualifier">ResetQualifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDestinationConfig` <a name="PutDestinationConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig"></a>

```go
func PutDestinationConfig(value LambdaFunctionEventInvokeConfigDestinationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

---

##### `ResetDestinationConfig` <a name="ResetDestinationConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetDestinationConfig"></a>

```go
func ResetDestinationConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetMaximumEventAgeInSeconds` <a name="ResetMaximumEventAgeInSeconds" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumEventAgeInSeconds"></a>

```go
func ResetMaximumEventAgeInSeconds()
```

##### `ResetMaximumRetryAttempts` <a name="ResetMaximumRetryAttempts" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumRetryAttempts"></a>

```go
func ResetMaximumRetryAttempts()
```

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetQualifier"></a>

```go
func ResetQualifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

lambdafunctioneventinvokeconfig.LambdaFunctionEventInvokeConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

lambdafunctioneventinvokeconfig.LambdaFunctionEventInvokeConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

lambdafunctioneventinvokeconfig.LambdaFunctionEventInvokeConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfigInput">DestinationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSecondsInput">MaximumEventAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttemptsInput">MaximumRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifierInput">QualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationConfig`<sup>Required</sup> <a name="DestinationConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfig"></a>

```go
func DestinationConfig() LambdaFunctionEventInvokeConfigDestinationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOutputReference</a>

---

##### `DestinationConfigInput`<sup>Optional</sup> <a name="DestinationConfigInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfigInput"></a>

```go
func DestinationConfigInput() LambdaFunctionEventInvokeConfigDestinationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="MaximumEventAgeInSecondsInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSecondsInput"></a>

```go
func MaximumEventAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaximumRetryAttemptsInput`<sup>Optional</sup> <a name="MaximumRetryAttemptsInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttemptsInput"></a>

```go
func MaximumRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifierInput"></a>

```go
func QualifierInput() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaximumEventAgeInSeconds`<sup>Required</sup> <a name="MaximumEventAgeInSeconds" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

```go
func MaximumEventAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `MaximumRetryAttempts`<sup>Required</sup> <a name="MaximumRetryAttempts" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttempts"></a>

```go
func MaximumRetryAttempts() *f64
```

- *Type:* *f64

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionEventInvokeConfigConfig <a name="LambdaFunctionEventInvokeConfigConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

&lambdafunctioneventinvokeconfig.LambdaFunctionEventInvokeConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionName: *string,
	DestinationConfig: github.com/cdktf/cdktf-provider-aws-go/aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig,
	Id: *string,
	MaximumEventAgeInSeconds: *f64,
	MaximumRetryAttempts: *f64,
	Qualifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | destination_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.qualifier">Qualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}.

---

##### `DestinationConfig`<sup>Optional</sup> <a name="DestinationConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.destinationConfig"></a>

```go
DestinationConfig LambdaFunctionEventInvokeConfigDestinationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

destination_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination_config LambdaFunctionEventInvokeConfig#destination_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaximumEventAgeInSeconds`<sup>Optional</sup> <a name="MaximumEventAgeInSeconds" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumEventAgeInSeconds"></a>

```go
MaximumEventAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}.

---

##### `MaximumRetryAttempts`<sup>Optional</sup> <a name="MaximumRetryAttempts" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumRetryAttempts"></a>

```go
MaximumRetryAttempts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}.

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.qualifier"></a>

```go
Qualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}.

---

### LambdaFunctionEventInvokeConfigDestinationConfig <a name="LambdaFunctionEventInvokeConfigDestinationConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

&lambdafunctioneventinvokeconfig.LambdaFunctionEventInvokeConfigDestinationConfig {
	OnFailure: github.com/cdktf/cdktf-provider-aws-go/aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure,
	OnSuccess: github.com/cdktf/cdktf-provider-aws-go/aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onSuccess">OnSuccess</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a></code> | on_success block. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onFailure"></a>

```go
OnFailure LambdaFunctionEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#on_failure LambdaFunctionEventInvokeConfig#on_failure}

---

##### `OnSuccess`<sup>Optional</sup> <a name="OnSuccess" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onSuccess"></a>

```go
OnSuccess LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#on_success LambdaFunctionEventInvokeConfig#on_success}

---

### LambdaFunctionEventInvokeConfigDestinationConfigOnFailure <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnFailure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

&lambdafunctioneventinvokeconfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}.

---

### LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

&lambdafunctioneventinvokeconfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

lambdafunctioneventinvokeconfig.NewLambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaFunctionEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

---


### LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

lambdafunctioneventinvokeconfig.NewLambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

---


### LambdaFunctionEventInvokeConfigDestinationConfigOutputReference <a name="LambdaFunctionEventInvokeConfigDestinationConfigOutputReference" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lambdafunctioneventinvokeconfig"

lambdafunctioneventinvokeconfig.NewLambdaFunctionEventInvokeConfigDestinationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaFunctionEventInvokeConfigDestinationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnSuccess">PutOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess">ResetOnSuccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnFailure"></a>

```go
func PutOnFailure(value LambdaFunctionEventInvokeConfigDestinationConfigOnFailure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `PutOnSuccess` <a name="PutOnSuccess" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnSuccess"></a>

```go
func PutOnSuccess(value LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnFailure"></a>

```go
func ResetOnFailure()
```

##### `ResetOnSuccess` <a name="ResetOnSuccess" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess"></a>

```go
func ResetOnSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccess">OnSuccess</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput">OnSuccessInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailure"></a>

```go
func OnFailure() LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference</a>

---

##### `OnSuccess`<sup>Required</sup> <a name="OnSuccess" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccess"></a>

```go
func OnSuccess() LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput"></a>

```go
func OnFailureInput() LambdaFunctionEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `OnSuccessInput`<sup>Optional</sup> <a name="OnSuccessInput" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput"></a>

```go
func OnSuccessInput() LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaFunctionEventInvokeConfigDestinationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

---



