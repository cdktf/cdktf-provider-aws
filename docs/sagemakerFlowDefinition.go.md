# `sagemakerFlowDefinition` Submodule <a name="`sagemakerFlowDefinition` Submodule" id="@cdktf/provider-aws.sagemakerFlowDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFlowDefinition <a name="SagemakerFlowDefinition" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition aws_sagemaker_flow_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.NewSagemakerFlowDefinition(scope Construct, id *string, config SagemakerFlowDefinitionConfig) SagemakerFlowDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig">SagemakerFlowDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig">SagemakerFlowDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig">PutHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig">PutHumanLoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource">PutHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig">PutOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig">ResetHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource">ResetHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutHumanLoopActivationConfig` <a name="PutHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig"></a>

```go
func PutHumanLoopActivationConfig(value SagemakerFlowDefinitionHumanLoopActivationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---

##### `PutHumanLoopConfig` <a name="PutHumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig"></a>

```go
func PutHumanLoopConfig(value SagemakerFlowDefinitionHumanLoopConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---

##### `PutHumanLoopRequestSource` <a name="PutHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource"></a>

```go
func PutHumanLoopRequestSource(value SagemakerFlowDefinitionHumanLoopRequestSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---

##### `PutOutputConfig` <a name="PutOutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig"></a>

```go
func PutOutputConfig(value SagemakerFlowDefinitionOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---

##### `ResetHumanLoopActivationConfig` <a name="ResetHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig"></a>

```go
func ResetHumanLoopActivationConfig()
```

##### `ResetHumanLoopRequestSource` <a name="ResetHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource"></a>

```go
func ResetHumanLoopRequestSource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.SagemakerFlowDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.SagemakerFlowDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.SagemakerFlowDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig">HumanLoopActivationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig">HumanLoopConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource">HumanLoopRequestSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput">FlowDefinitionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput">HumanLoopActivationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput">HumanLoopConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput">HumanLoopRequestSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput">OutputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName">FlowDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HumanLoopActivationConfig`<sup>Required</sup> <a name="HumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig"></a>

```go
func HumanLoopActivationConfig() SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a>

---

##### `HumanLoopConfig`<sup>Required</sup> <a name="HumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig"></a>

```go
func HumanLoopConfig() SagemakerFlowDefinitionHumanLoopConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a>

---

##### `HumanLoopRequestSource`<sup>Required</sup> <a name="HumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource"></a>

```go
func HumanLoopRequestSource() SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a>

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig"></a>

```go
func OutputConfig() SagemakerFlowDefinitionOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a>

---

##### `FlowDefinitionNameInput`<sup>Optional</sup> <a name="FlowDefinitionNameInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput"></a>

```go
func FlowDefinitionNameInput() *string
```

- *Type:* *string

---

##### `HumanLoopActivationConfigInput`<sup>Optional</sup> <a name="HumanLoopActivationConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput"></a>

```go
func HumanLoopActivationConfigInput() SagemakerFlowDefinitionHumanLoopActivationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---

##### `HumanLoopConfigInput`<sup>Optional</sup> <a name="HumanLoopConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput"></a>

```go
func HumanLoopConfigInput() SagemakerFlowDefinitionHumanLoopConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---

##### `HumanLoopRequestSourceInput`<sup>Optional</sup> <a name="HumanLoopRequestSourceInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput"></a>

```go
func HumanLoopRequestSourceInput() SagemakerFlowDefinitionHumanLoopRequestSource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OutputConfigInput`<sup>Optional</sup> <a name="OutputConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput"></a>

```go
func OutputConfigInput() SagemakerFlowDefinitionOutputConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FlowDefinitionName`<sup>Required</sup> <a name="FlowDefinitionName" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName"></a>

```go
func FlowDefinitionName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFlowDefinitionConfig <a name="SagemakerFlowDefinitionConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

&sagemakerflowdefinition.SagemakerFlowDefinitionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FlowDefinitionName: *string,
	HumanLoopConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig,
	OutputConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig,
	RoleArn: *string,
	HumanLoopActivationConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig,
	HumanLoopRequestSource: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName">FlowDefinitionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig">HumanLoopConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | human_loop_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig">HumanLoopActivationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | human_loop_activation_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource">HumanLoopRequestSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | human_loop_request_source block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FlowDefinitionName`<sup>Required</sup> <a name="FlowDefinitionName" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName"></a>

```go
FlowDefinitionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}.

---

##### `HumanLoopConfig`<sup>Required</sup> <a name="HumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig"></a>

```go
HumanLoopConfig SagemakerFlowDefinitionHumanLoopConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

human_loop_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_config SagemakerFlowDefinition#human_loop_config}

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig"></a>

```go
OutputConfig SagemakerFlowDefinitionOutputConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#output_config SagemakerFlowDefinition#output_config}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}.

---

##### `HumanLoopActivationConfig`<sup>Optional</sup> <a name="HumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig"></a>

```go
HumanLoopActivationConfig SagemakerFlowDefinitionHumanLoopActivationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

human_loop_activation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}

---

##### `HumanLoopRequestSource`<sup>Optional</sup> <a name="HumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource"></a>

```go
HumanLoopRequestSource SagemakerFlowDefinitionHumanLoopRequestSource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

human_loop_request_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}.

---

### SagemakerFlowDefinitionHumanLoopActivationConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

&sagemakerflowdefinition.SagemakerFlowDefinitionHumanLoopActivationConfig {
	HumanLoopActivationConditionsConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig">HumanLoopActivationConditionsConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | human_loop_activation_conditions_config block. |

---

##### `HumanLoopActivationConditionsConfig`<sup>Optional</sup> <a name="HumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig"></a>

```go
HumanLoopActivationConditionsConfig SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

human_loop_activation_conditions_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}

---

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

&sagemakerflowdefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
	HumanLoopActivationConditions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions">HumanLoopActivationConditions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}. |

---

##### `HumanLoopActivationConditions`<sup>Required</sup> <a name="HumanLoopActivationConditions" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions"></a>

```go
HumanLoopActivationConditions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}.

---

### SagemakerFlowDefinitionHumanLoopConfig <a name="SagemakerFlowDefinitionHumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

&sagemakerflowdefinition.SagemakerFlowDefinitionHumanLoopConfig {
	HumanTaskUiArn: *string,
	TaskCount: *f64,
	TaskDescription: *string,
	TaskTitle: *string,
	WorkteamArn: *string,
	PublicWorkforceTaskPrice: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice,
	TaskAvailabilityLifetimeInSeconds: *f64,
	TaskKeywords: *[]*string,
	TaskTimeLimitInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn">HumanTaskUiArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount">TaskCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription">TaskDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle">TaskTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn">WorkteamArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice">PublicWorkforceTaskPrice</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | public_workforce_task_price block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds">TaskAvailabilityLifetimeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords">TaskKeywords</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds">TaskTimeLimitInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}. |

---

##### `HumanTaskUiArn`<sup>Required</sup> <a name="HumanTaskUiArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn"></a>

```go
HumanTaskUiArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}.

---

##### `TaskCount`<sup>Required</sup> <a name="TaskCount" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount"></a>

```go
TaskCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}.

---

##### `TaskDescription`<sup>Required</sup> <a name="TaskDescription" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription"></a>

```go
TaskDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}.

---

##### `TaskTitle`<sup>Required</sup> <a name="TaskTitle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle"></a>

```go
TaskTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}.

---

##### `WorkteamArn`<sup>Required</sup> <a name="WorkteamArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn"></a>

```go
WorkteamArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}.

---

##### `PublicWorkforceTaskPrice`<sup>Optional</sup> <a name="PublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice"></a>

```go
PublicWorkforceTaskPrice SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}

---

##### `TaskAvailabilityLifetimeInSeconds`<sup>Optional</sup> <a name="TaskAvailabilityLifetimeInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds"></a>

```go
TaskAvailabilityLifetimeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}.

---

##### `TaskKeywords`<sup>Optional</sup> <a name="TaskKeywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords"></a>

```go
TaskKeywords *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}.

---

##### `TaskTimeLimitInSeconds`<sup>Optional</sup> <a name="TaskTimeLimitInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds"></a>

```go
TaskTimeLimitInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}.

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

&sagemakerflowdefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
	AmountInUsd: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd">AmountInUsd</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | amount_in_usd block. |

---

##### `AmountInUsd`<sup>Optional</sup> <a name="AmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd"></a>

```go
AmountInUsd SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

amount_in_usd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#amount_in_usd SagemakerFlowDefinition#amount_in_usd}

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

&sagemakerflowdefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
	Cents: *f64,
	Dollars: *f64,
	TenthFractionsOfACent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents">Cents</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars">Dollars</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent">TenthFractionsOfACent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}. |

---

##### `Cents`<sup>Optional</sup> <a name="Cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents"></a>

```go
Cents *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}.

---

##### `Dollars`<sup>Optional</sup> <a name="Dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars"></a>

```go
Dollars *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}.

---

##### `TenthFractionsOfACent`<sup>Optional</sup> <a name="TenthFractionsOfACent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent"></a>

```go
TenthFractionsOfACent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}.

---

### SagemakerFlowDefinitionHumanLoopRequestSource <a name="SagemakerFlowDefinitionHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

&sagemakerflowdefinition.SagemakerFlowDefinitionHumanLoopRequestSource {
	AwsManagedHumanLoopRequestSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource">AwsManagedHumanLoopRequestSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}. |

---

##### `AwsManagedHumanLoopRequestSource`<sup>Required</sup> <a name="AwsManagedHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource"></a>

```go
AwsManagedHumanLoopRequestSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}.

---

### SagemakerFlowDefinitionOutputConfig <a name="SagemakerFlowDefinitionOutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

&sagemakerflowdefinition.SagemakerFlowDefinitionOutputConfig {
	S3OutputPath: *string,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath">S3OutputPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}. |

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath"></a>

```go
S3OutputPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.NewSagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput">HumanLoopActivationConditionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions">HumanLoopActivationConditions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HumanLoopActivationConditionsInput`<sup>Optional</sup> <a name="HumanLoopActivationConditionsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput"></a>

```go
func HumanLoopActivationConditionsInput() *string
```

- *Type:* *string

---

##### `HumanLoopActivationConditions`<sup>Required</sup> <a name="HumanLoopActivationConditions" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions"></a>

```go
func HumanLoopActivationConditions() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---


### SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.NewSagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig">PutHumanLoopActivationConditionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig">ResetHumanLoopActivationConditionsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHumanLoopActivationConditionsConfig` <a name="PutHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig"></a>

```go
func PutHumanLoopActivationConditionsConfig(value SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---

##### `ResetHumanLoopActivationConditionsConfig` <a name="ResetHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig"></a>

```go
func ResetHumanLoopActivationConditionsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig">HumanLoopActivationConditionsConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput">HumanLoopActivationConditionsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HumanLoopActivationConditionsConfig`<sup>Required</sup> <a name="HumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig"></a>

```go
func HumanLoopActivationConditionsConfig() SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a>

---

##### `HumanLoopActivationConditionsConfigInput`<sup>Optional</sup> <a name="HumanLoopActivationConditionsConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput"></a>

```go
func HumanLoopActivationConditionsConfigInput() SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFlowDefinitionHumanLoopActivationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.NewSagemakerFlowDefinitionHumanLoopConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFlowDefinitionHumanLoopConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice">PutPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice">ResetPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds">ResetTaskAvailabilityLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords">ResetTaskKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds">ResetTaskTimeLimitInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicWorkforceTaskPrice` <a name="PutPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice"></a>

```go
func PutPublicWorkforceTaskPrice(value SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---

##### `ResetPublicWorkforceTaskPrice` <a name="ResetPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice"></a>

```go
func ResetPublicWorkforceTaskPrice()
```

##### `ResetTaskAvailabilityLifetimeInSeconds` <a name="ResetTaskAvailabilityLifetimeInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds"></a>

```go
func ResetTaskAvailabilityLifetimeInSeconds()
```

##### `ResetTaskKeywords` <a name="ResetTaskKeywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords"></a>

```go
func ResetTaskKeywords()
```

##### `ResetTaskTimeLimitInSeconds` <a name="ResetTaskTimeLimitInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds"></a>

```go
func ResetTaskTimeLimitInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice">PublicWorkforceTaskPrice</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput">HumanTaskUiArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput">PublicWorkforceTaskPriceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput">TaskAvailabilityLifetimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput">TaskCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput">TaskDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput">TaskKeywordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput">TaskTimeLimitInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput">TaskTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput">WorkteamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn">HumanTaskUiArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds">TaskAvailabilityLifetimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount">TaskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription">TaskDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords">TaskKeywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds">TaskTimeLimitInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle">TaskTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn">WorkteamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicWorkforceTaskPrice`<sup>Required</sup> <a name="PublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice"></a>

```go
func PublicWorkforceTaskPrice() SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a>

---

##### `HumanTaskUiArnInput`<sup>Optional</sup> <a name="HumanTaskUiArnInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput"></a>

```go
func HumanTaskUiArnInput() *string
```

- *Type:* *string

---

##### `PublicWorkforceTaskPriceInput`<sup>Optional</sup> <a name="PublicWorkforceTaskPriceInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput"></a>

```go
func PublicWorkforceTaskPriceInput() SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---

##### `TaskAvailabilityLifetimeInSecondsInput`<sup>Optional</sup> <a name="TaskAvailabilityLifetimeInSecondsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput"></a>

```go
func TaskAvailabilityLifetimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TaskCountInput`<sup>Optional</sup> <a name="TaskCountInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput"></a>

```go
func TaskCountInput() *f64
```

- *Type:* *f64

---

##### `TaskDescriptionInput`<sup>Optional</sup> <a name="TaskDescriptionInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput"></a>

```go
func TaskDescriptionInput() *string
```

- *Type:* *string

---

##### `TaskKeywordsInput`<sup>Optional</sup> <a name="TaskKeywordsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput"></a>

```go
func TaskKeywordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TaskTimeLimitInSecondsInput`<sup>Optional</sup> <a name="TaskTimeLimitInSecondsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput"></a>

```go
func TaskTimeLimitInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TaskTitleInput`<sup>Optional</sup> <a name="TaskTitleInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput"></a>

```go
func TaskTitleInput() *string
```

- *Type:* *string

---

##### `WorkteamArnInput`<sup>Optional</sup> <a name="WorkteamArnInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput"></a>

```go
func WorkteamArnInput() *string
```

- *Type:* *string

---

##### `HumanTaskUiArn`<sup>Required</sup> <a name="HumanTaskUiArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn"></a>

```go
func HumanTaskUiArn() *string
```

- *Type:* *string

---

##### `TaskAvailabilityLifetimeInSeconds`<sup>Required</sup> <a name="TaskAvailabilityLifetimeInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds"></a>

```go
func TaskAvailabilityLifetimeInSeconds() *f64
```

- *Type:* *f64

---

##### `TaskCount`<sup>Required</sup> <a name="TaskCount" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount"></a>

```go
func TaskCount() *f64
```

- *Type:* *f64

---

##### `TaskDescription`<sup>Required</sup> <a name="TaskDescription" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription"></a>

```go
func TaskDescription() *string
```

- *Type:* *string

---

##### `TaskKeywords`<sup>Required</sup> <a name="TaskKeywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords"></a>

```go
func TaskKeywords() *[]*string
```

- *Type:* *[]*string

---

##### `TaskTimeLimitInSeconds`<sup>Required</sup> <a name="TaskTimeLimitInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds"></a>

```go
func TaskTimeLimitInSeconds() *f64
```

- *Type:* *f64

---

##### `TaskTitle`<sup>Required</sup> <a name="TaskTitle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle"></a>

```go
func TaskTitle() *string
```

- *Type:* *string

---

##### `WorkteamArn`<sup>Required</sup> <a name="WorkteamArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn"></a>

```go
func WorkteamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFlowDefinitionHumanLoopConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.NewSagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents">ResetCents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars">ResetDollars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent">ResetTenthFractionsOfACent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCents` <a name="ResetCents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents"></a>

```go
func ResetCents()
```

##### `ResetDollars` <a name="ResetDollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars"></a>

```go
func ResetDollars()
```

##### `ResetTenthFractionsOfACent` <a name="ResetTenthFractionsOfACent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent"></a>

```go
func ResetTenthFractionsOfACent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput">CentsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput">DollarsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput">TenthFractionsOfACentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents">Cents</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars">Dollars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent">TenthFractionsOfACent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CentsInput`<sup>Optional</sup> <a name="CentsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput"></a>

```go
func CentsInput() *f64
```

- *Type:* *f64

---

##### `DollarsInput`<sup>Optional</sup> <a name="DollarsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput"></a>

```go
func DollarsInput() *f64
```

- *Type:* *f64

---

##### `TenthFractionsOfACentInput`<sup>Optional</sup> <a name="TenthFractionsOfACentInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput"></a>

```go
func TenthFractionsOfACentInput() *f64
```

- *Type:* *f64

---

##### `Cents`<sup>Required</sup> <a name="Cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents"></a>

```go
func Cents() *f64
```

- *Type:* *f64

---

##### `Dollars`<sup>Required</sup> <a name="Dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars"></a>

```go
func Dollars() *f64
```

- *Type:* *f64

---

##### `TenthFractionsOfACent`<sup>Required</sup> <a name="TenthFractionsOfACent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent"></a>

```go
func TenthFractionsOfACent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.NewSagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd">PutAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd">ResetAmountInUsd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmountInUsd` <a name="PutAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd"></a>

```go
func PutAmountInUsd(value SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---

##### `ResetAmountInUsd` <a name="ResetAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd"></a>

```go
func ResetAmountInUsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd">AmountInUsd</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput">AmountInUsdInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmountInUsd`<sup>Required</sup> <a name="AmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd"></a>

```go
func AmountInUsd() SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a>

---

##### `AmountInUsdInput`<sup>Optional</sup> <a name="AmountInUsdInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput"></a>

```go
func AmountInUsdInput() SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---


### SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference <a name="SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.NewSagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput">AwsManagedHumanLoopRequestSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource">AwsManagedHumanLoopRequestSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsManagedHumanLoopRequestSourceInput`<sup>Optional</sup> <a name="AwsManagedHumanLoopRequestSourceInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput"></a>

```go
func AwsManagedHumanLoopRequestSourceInput() *string
```

- *Type:* *string

---

##### `AwsManagedHumanLoopRequestSource`<sup>Required</sup> <a name="AwsManagedHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource"></a>

```go
func AwsManagedHumanLoopRequestSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFlowDefinitionHumanLoopRequestSource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---


### SagemakerFlowDefinitionOutputConfigOutputReference <a name="SagemakerFlowDefinitionOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerflowdefinition"

sagemakerflowdefinition.NewSagemakerFlowDefinitionOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFlowDefinitionOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput">S3OutputPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `S3OutputPathInput`<sup>Optional</sup> <a name="S3OutputPathInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput"></a>

```go
func S3OutputPathInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath"></a>

```go
func S3OutputPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFlowDefinitionOutputConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---



