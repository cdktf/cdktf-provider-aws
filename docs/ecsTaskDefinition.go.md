# `ecsTaskDefinition` Submodule <a name="`ecsTaskDefinition` Submodule" id="@cdktf/provider-aws.ecsTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsTaskDefinition <a name="EcsTaskDefinition" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition aws_ecs_task_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinition(scope Construct, id *string, config EcsTaskDefinitionConfig) EcsTaskDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig">EcsTaskDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig">EcsTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage">PutEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator">PutInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints">PutPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration">PutProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform">PutRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetInferenceAccelerator">ResetInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetIpcMode">ResetIpcMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetNetworkMode">ResetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPidMode">ResetPidMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPlacementConstraints">ResetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetProxyConfiguration">ResetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRequiresCompatibilities">ResetRequiresCompatibilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRuntimePlatform">ResetRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetSkipDestroy">ResetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTaskRoleArn">ResetTaskRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEphemeralStorage` <a name="PutEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage"></a>

```go
func PutEphemeralStorage(value EcsTaskDefinitionEphemeralStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---

##### `PutInferenceAccelerator` <a name="PutInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator"></a>

```go
func PutInferenceAccelerator(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlacementConstraints` <a name="PutPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints"></a>

```go
func PutPlacementConstraints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProxyConfiguration` <a name="PutProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration"></a>

```go
func PutProxyConfiguration(value EcsTaskDefinitionProxyConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---

##### `PutRuntimePlatform` <a name="PutRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform"></a>

```go
func PutRuntimePlatform(value EcsTaskDefinitionRuntimePlatform)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume"></a>

```go
func PutVolume(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetEphemeralStorage"></a>

```go
func ResetEphemeralStorage()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetInferenceAccelerator` <a name="ResetInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetInferenceAccelerator"></a>

```go
func ResetInferenceAccelerator()
```

##### `ResetIpcMode` <a name="ResetIpcMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetIpcMode"></a>

```go
func ResetIpcMode()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetNetworkMode` <a name="ResetNetworkMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetNetworkMode"></a>

```go
func ResetNetworkMode()
```

##### `ResetPidMode` <a name="ResetPidMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPidMode"></a>

```go
func ResetPidMode()
```

##### `ResetPlacementConstraints` <a name="ResetPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPlacementConstraints"></a>

```go
func ResetPlacementConstraints()
```

##### `ResetProxyConfiguration` <a name="ResetProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetProxyConfiguration"></a>

```go
func ResetProxyConfiguration()
```

##### `ResetRequiresCompatibilities` <a name="ResetRequiresCompatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRequiresCompatibilities"></a>

```go
func ResetRequiresCompatibilities()
```

##### `ResetRuntimePlatform` <a name="ResetRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRuntimePlatform"></a>

```go
func ResetRuntimePlatform()
```

##### `ResetSkipDestroy` <a name="ResetSkipDestroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetSkipDestroy"></a>

```go
func ResetSkipDestroy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTaskRoleArn` <a name="ResetTaskRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTaskRoleArn"></a>

```go
func ResetTaskRoleArn()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetVolume"></a>

```go
func ResetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.EcsTaskDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.EcsTaskDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.EcsTaskDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference">EcsTaskDefinitionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAccelerator">InferenceAccelerator</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList">EcsTaskDefinitionInferenceAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraints">PlacementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList">EcsTaskDefinitionPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfiguration">ProxyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference">EcsTaskDefinitionProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatform">RuntimePlatform</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference">EcsTaskDefinitionRuntimePlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList">EcsTaskDefinitionVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitionsInput">ContainerDefinitionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpuInput">CpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAcceleratorInput">InferenceAcceleratorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcModeInput">IpcModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkModeInput">NetworkModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidModeInput">PidModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraintsInput">PlacementConstraintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfigurationInput">ProxyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilitiesInput">RequiresCompatibilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatformInput">RuntimePlatformInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroyInput">SkipDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArnInput">TaskRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volumeInput">VolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitions">ContainerDefinitions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcMode">IpcMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkMode">NetworkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidMode">PidMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilities">RequiresCompatibilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroy">SkipDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArn">TaskRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorage"></a>

```go
func EphemeralStorage() EcsTaskDefinitionEphemeralStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference">EcsTaskDefinitionEphemeralStorageOutputReference</a>

---

##### `InferenceAccelerator`<sup>Required</sup> <a name="InferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAccelerator"></a>

```go
func InferenceAccelerator() EcsTaskDefinitionInferenceAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList">EcsTaskDefinitionInferenceAcceleratorList</a>

---

##### `PlacementConstraints`<sup>Required</sup> <a name="PlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraints"></a>

```go
func PlacementConstraints() EcsTaskDefinitionPlacementConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList">EcsTaskDefinitionPlacementConstraintsList</a>

---

##### `ProxyConfiguration`<sup>Required</sup> <a name="ProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfiguration"></a>

```go
func ProxyConfiguration() EcsTaskDefinitionProxyConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference">EcsTaskDefinitionProxyConfigurationOutputReference</a>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `RuntimePlatform`<sup>Required</sup> <a name="RuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatform"></a>

```go
func RuntimePlatform() EcsTaskDefinitionRuntimePlatformOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference">EcsTaskDefinitionRuntimePlatformOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volume"></a>

```go
func Volume() EcsTaskDefinitionVolumeList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList">EcsTaskDefinitionVolumeList</a>

---

##### `ContainerDefinitionsInput`<sup>Optional</sup> <a name="ContainerDefinitionsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitionsInput"></a>

```go
func ContainerDefinitionsInput() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpuInput"></a>

```go
func CpuInput() *string
```

- *Type:* *string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorageInput"></a>

```go
func EphemeralStorageInput() EcsTaskDefinitionEphemeralStorage
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InferenceAcceleratorInput`<sup>Optional</sup> <a name="InferenceAcceleratorInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAcceleratorInput"></a>

```go
func InferenceAcceleratorInput() interface{}
```

- *Type:* interface{}

---

##### `IpcModeInput`<sup>Optional</sup> <a name="IpcModeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcModeInput"></a>

```go
func IpcModeInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkModeInput"></a>

```go
func NetworkModeInput() *string
```

- *Type:* *string

---

##### `PidModeInput`<sup>Optional</sup> <a name="PidModeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidModeInput"></a>

```go
func PidModeInput() *string
```

- *Type:* *string

---

##### `PlacementConstraintsInput`<sup>Optional</sup> <a name="PlacementConstraintsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraintsInput"></a>

```go
func PlacementConstraintsInput() interface{}
```

- *Type:* interface{}

---

##### `ProxyConfigurationInput`<sup>Optional</sup> <a name="ProxyConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfigurationInput"></a>

```go
func ProxyConfigurationInput() EcsTaskDefinitionProxyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---

##### `RequiresCompatibilitiesInput`<sup>Optional</sup> <a name="RequiresCompatibilitiesInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilitiesInput"></a>

```go
func RequiresCompatibilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimePlatformInput`<sup>Optional</sup> <a name="RuntimePlatformInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatformInput"></a>

```go
func RuntimePlatformInput() EcsTaskDefinitionRuntimePlatform
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---

##### `SkipDestroyInput`<sup>Optional</sup> <a name="SkipDestroyInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroyInput"></a>

```go
func SkipDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskRoleArnInput`<sup>Optional</sup> <a name="TaskRoleArnInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArnInput"></a>

```go
func TaskRoleArnInput() *string
```

- *Type:* *string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volumeInput"></a>

```go
func VolumeInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerDefinitions`<sup>Required</sup> <a name="ContainerDefinitions" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitions"></a>

```go
func ContainerDefinitions() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpcMode`<sup>Required</sup> <a name="IpcMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcMode"></a>

```go
func IpcMode() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkMode"></a>

```go
func NetworkMode() *string
```

- *Type:* *string

---

##### `PidMode`<sup>Required</sup> <a name="PidMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidMode"></a>

```go
func PidMode() *string
```

- *Type:* *string

---

##### `RequiresCompatibilities`<sup>Required</sup> <a name="RequiresCompatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilities"></a>

```go
func RequiresCompatibilities() *[]*string
```

- *Type:* *[]*string

---

##### `SkipDestroy`<sup>Required</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroy"></a>

```go
func SkipDestroy() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArn"></a>

```go
func TaskRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsTaskDefinitionConfig <a name="EcsTaskDefinitionConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerDefinitions: *string,
	Family: *string,
	Cpu: *string,
	EphemeralStorage: github.com/cdktf/cdktf-provider-aws-go/aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage,
	ExecutionRoleArn: *string,
	Id: *string,
	InferenceAccelerator: interface{},
	IpcMode: *string,
	Memory: *string,
	NetworkMode: *string,
	PidMode: *string,
	PlacementConstraints: interface{},
	ProxyConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration,
	RequiresCompatibilities: *[]*string,
	RuntimePlatform: github.com/cdktf/cdktf-provider-aws-go/aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform,
	SkipDestroy: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TaskRoleArn: *string,
	Volume: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.containerDefinitions">ContainerDefinitions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.family">Family</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.cpu">Cpu</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.inferenceAccelerator">InferenceAccelerator</a></code> | <code>interface{}</code> | inference_accelerator block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ipcMode">IpcMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.memory">Memory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.networkMode">NetworkMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.pidMode">PidMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.placementConstraints">PlacementConstraints</a></code> | <code>interface{}</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.proxyConfiguration">ProxyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | proxy_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.requiresCompatibilities">RequiresCompatibilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.runtimePlatform">RuntimePlatform</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | runtime_platform block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.skipDestroy">SkipDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.taskRoleArn">TaskRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.volume">Volume</a></code> | <code>interface{}</code> | volume block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerDefinitions`<sup>Required</sup> <a name="ContainerDefinitions" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.containerDefinitions"></a>

```go
ContainerDefinitions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}.

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.family"></a>

```go
Family *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}.

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.cpu"></a>

```go
Cpu *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}.

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ephemeralStorage"></a>

```go
EphemeralStorage EcsTaskDefinitionEphemeralStorage
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ephemeral_storage EcsTaskDefinition#ephemeral_storage}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferenceAccelerator`<sup>Optional</sup> <a name="InferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.inferenceAccelerator"></a>

```go
InferenceAccelerator interface{}
```

- *Type:* interface{}

inference_accelerator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#inference_accelerator EcsTaskDefinition#inference_accelerator}

---

##### `IpcMode`<sup>Optional</sup> <a name="IpcMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ipcMode"></a>

```go
IpcMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}.

---

##### `NetworkMode`<sup>Optional</sup> <a name="NetworkMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.networkMode"></a>

```go
NetworkMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}.

---

##### `PidMode`<sup>Optional</sup> <a name="PidMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.pidMode"></a>

```go
PidMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}.

---

##### `PlacementConstraints`<sup>Optional</sup> <a name="PlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.placementConstraints"></a>

```go
PlacementConstraints interface{}
```

- *Type:* interface{}

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#placement_constraints EcsTaskDefinition#placement_constraints}

---

##### `ProxyConfiguration`<sup>Optional</sup> <a name="ProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.proxyConfiguration"></a>

```go
ProxyConfiguration EcsTaskDefinitionProxyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

proxy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#proxy_configuration EcsTaskDefinition#proxy_configuration}

---

##### `RequiresCompatibilities`<sup>Optional</sup> <a name="RequiresCompatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.requiresCompatibilities"></a>

```go
RequiresCompatibilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}.

---

##### `RuntimePlatform`<sup>Optional</sup> <a name="RuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.runtimePlatform"></a>

```go
RuntimePlatform EcsTaskDefinitionRuntimePlatform
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

runtime_platform block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#runtime_platform EcsTaskDefinition#runtime_platform}

---

##### `SkipDestroy`<sup>Optional</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.skipDestroy"></a>

```go
SkipDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}.

---

##### `TaskRoleArn`<sup>Optional</sup> <a name="TaskRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.taskRoleArn"></a>

```go
TaskRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}.

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.volume"></a>

```go
Volume interface{}
```

- *Type:* interface{}

volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#volume EcsTaskDefinition#volume}

---

### EcsTaskDefinitionEphemeralStorage <a name="EcsTaskDefinitionEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionEphemeralStorage {
	SizeInGib: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.property.sizeInGib">SizeInGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}. |

---

##### `SizeInGib`<sup>Required</sup> <a name="SizeInGib" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.property.sizeInGib"></a>

```go
SizeInGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}.

---

### EcsTaskDefinitionInferenceAccelerator <a name="EcsTaskDefinitionInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionInferenceAccelerator {
	DeviceName: *string,
	DeviceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_name EcsTaskDefinition#device_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceType">DeviceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_type EcsTaskDefinition#device_type}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_name EcsTaskDefinition#device_name}.

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceType"></a>

```go
DeviceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_type EcsTaskDefinition#device_type}.

---

### EcsTaskDefinitionPlacementConstraints <a name="EcsTaskDefinitionPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionPlacementConstraints {
	Type: *string,
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#expression EcsTaskDefinition#expression}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#expression EcsTaskDefinition#expression}.

---

### EcsTaskDefinitionProxyConfiguration <a name="EcsTaskDefinitionProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionProxyConfiguration {
	ContainerName: *string,
	Properties: *map[string]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_name EcsTaskDefinition#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#properties EcsTaskDefinition#properties}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}. |

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_name EcsTaskDefinition#container_name}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#properties EcsTaskDefinition#properties}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}.

---

### EcsTaskDefinitionRuntimePlatform <a name="EcsTaskDefinitionRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionRuntimePlatform {
	CpuArchitecture: *string,
	OperatingSystemFamily: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.cpuArchitecture">CpuArchitecture</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.operatingSystemFamily">OperatingSystemFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}. |

---

##### `CpuArchitecture`<sup>Optional</sup> <a name="CpuArchitecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.cpuArchitecture"></a>

```go
CpuArchitecture *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}.

---

##### `OperatingSystemFamily`<sup>Optional</sup> <a name="OperatingSystemFamily" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.operatingSystemFamily"></a>

```go
OperatingSystemFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}.

---

### EcsTaskDefinitionVolume <a name="EcsTaskDefinitionVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionVolume {
	Name: *string,
	DockerVolumeConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration,
	EfsVolumeConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration,
	FsxWindowsFileServerVolumeConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration,
	HostPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#name EcsTaskDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.dockerVolumeConfiguration">DockerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | docker_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.efsVolumeConfiguration">EfsVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | efs_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.fsxWindowsFileServerVolumeConfiguration">FsxWindowsFileServerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | fsx_windows_file_server_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.hostPath">HostPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#host_path EcsTaskDefinition#host_path}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#name EcsTaskDefinition#name}.

---

##### `DockerVolumeConfiguration`<sup>Optional</sup> <a name="DockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.dockerVolumeConfiguration"></a>

```go
DockerVolumeConfiguration EcsTaskDefinitionVolumeDockerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

docker_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}

---

##### `EfsVolumeConfiguration`<sup>Optional</sup> <a name="EfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.efsVolumeConfiguration"></a>

```go
EfsVolumeConfiguration EcsTaskDefinitionVolumeEfsVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

efs_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}

---

##### `FsxWindowsFileServerVolumeConfiguration`<sup>Optional</sup> <a name="FsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.fsxWindowsFileServerVolumeConfiguration"></a>

```go
FsxWindowsFileServerVolumeConfiguration EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

fsx_windows_file_server_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}

---

##### `HostPath`<sup>Optional</sup> <a name="HostPath" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.hostPath"></a>

```go
HostPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#host_path EcsTaskDefinition#host_path}.

---

### EcsTaskDefinitionVolumeDockerVolumeConfiguration <a name="EcsTaskDefinitionVolumeDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration {
	Autoprovision: interface{},
	Driver: *string,
	DriverOpts: *map[string]*string,
	Labels: *map[string]*string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.autoprovision">Autoprovision</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driver">Driver</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver EcsTaskDefinition#driver}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driverOpts">DriverOpts</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#labels EcsTaskDefinition#labels}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#scope EcsTaskDefinition#scope}. |

---

##### `Autoprovision`<sup>Optional</sup> <a name="Autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.autoprovision"></a>

```go
Autoprovision interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}.

---

##### `Driver`<sup>Optional</sup> <a name="Driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driver"></a>

```go
Driver *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver EcsTaskDefinition#driver}.

---

##### `DriverOpts`<sup>Optional</sup> <a name="DriverOpts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driverOpts"></a>

```go
DriverOpts *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#labels EcsTaskDefinition#labels}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#scope EcsTaskDefinition#scope}.

---

### EcsTaskDefinitionVolumeEfsVolumeConfiguration <a name="EcsTaskDefinitionVolumeEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration {
	FileSystemId: *string,
	AuthorizationConfig: github.com/cdktf/cdktf-provider-aws-go/aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig,
	RootDirectory: *string,
	TransitEncryption: *string,
	TransitEncryptionPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | authorization_config block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryption">TransitEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryptionPort">TransitEncryptionPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}. |

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.fileSystemId"></a>

```go
FileSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.authorizationConfig"></a>

```go
AuthorizationConfig EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

##### `RootDirectory`<sup>Optional</sup> <a name="RootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.rootDirectory"></a>

```go
RootDirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

##### `TransitEncryption`<sup>Optional</sup> <a name="TransitEncryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryption"></a>

```go
TransitEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}.

---

##### `TransitEncryptionPort`<sup>Optional</sup> <a name="TransitEncryptionPort" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryptionPort"></a>

```go
TransitEncryptionPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}.

---

### EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
	AccessPointId: *string,
	Iam: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.accessPointId">AccessPointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.iam">Iam</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#iam EcsTaskDefinition#iam}. |

---

##### `AccessPointId`<sup>Optional</sup> <a name="AccessPointId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.accessPointId"></a>

```go
AccessPointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}.

---

##### `Iam`<sup>Optional</sup> <a name="Iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.iam"></a>

```go
Iam *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#iam EcsTaskDefinition#iam}.

---

### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
	AuthorizationConfig: github.com/cdktf/cdktf-provider-aws-go/aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig,
	FileSystemId: *string,
	RootDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | authorization_config block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}. |

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.authorizationConfig"></a>

```go
AuthorizationConfig EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.fileSystemId"></a>

```go
FileSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.rootDirectory"></a>

```go
RootDirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

&ecstaskdefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
	CredentialsParameter: *string,
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#domain EcsTaskDefinition#domain}. |

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.credentialsParameter"></a>

```go
CredentialsParameter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}.

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#domain EcsTaskDefinition#domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsTaskDefinitionEphemeralStorageOutputReference <a name="EcsTaskDefinitionEphemeralStorageOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionEphemeralStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsTaskDefinitionEphemeralStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGibInput">SizeInGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGib">SizeInGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeInGibInput`<sup>Optional</sup> <a name="SizeInGibInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGibInput"></a>

```go
func SizeInGibInput() *f64
```

- *Type:* *f64

---

##### `SizeInGib`<sup>Required</sup> <a name="SizeInGib" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGib"></a>

```go
func SizeInGib() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsTaskDefinitionEphemeralStorage
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---


### EcsTaskDefinitionInferenceAcceleratorList <a name="EcsTaskDefinitionInferenceAcceleratorList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionInferenceAcceleratorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsTaskDefinitionInferenceAcceleratorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get"></a>

```go
func Get(index *f64) EcsTaskDefinitionInferenceAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsTaskDefinitionInferenceAcceleratorOutputReference <a name="EcsTaskDefinitionInferenceAcceleratorOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionInferenceAcceleratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsTaskDefinitionInferenceAcceleratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceType">DeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceTypeInput"></a>

```go
func DeviceTypeInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceType"></a>

```go
func DeviceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsTaskDefinitionPlacementConstraintsList <a name="EcsTaskDefinitionPlacementConstraintsList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionPlacementConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsTaskDefinitionPlacementConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get"></a>

```go
func Get(index *f64) EcsTaskDefinitionPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsTaskDefinitionPlacementConstraintsOutputReference <a name="EcsTaskDefinitionPlacementConstraintsOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionPlacementConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsTaskDefinitionPlacementConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsTaskDefinitionProxyConfigurationOutputReference <a name="EcsTaskDefinitionProxyConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionProxyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsTaskDefinitionProxyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsTaskDefinitionProxyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---


### EcsTaskDefinitionRuntimePlatformOutputReference <a name="EcsTaskDefinitionRuntimePlatformOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionRuntimePlatformOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsTaskDefinitionRuntimePlatformOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetCpuArchitecture">ResetCpuArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetOperatingSystemFamily">ResetOperatingSystemFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuArchitecture` <a name="ResetCpuArchitecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetCpuArchitecture"></a>

```go
func ResetCpuArchitecture()
```

##### `ResetOperatingSystemFamily` <a name="ResetOperatingSystemFamily" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetOperatingSystemFamily"></a>

```go
func ResetOperatingSystemFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitectureInput">CpuArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamilyInput">OperatingSystemFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture">CpuArchitecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily">OperatingSystemFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuArchitectureInput`<sup>Optional</sup> <a name="CpuArchitectureInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitectureInput"></a>

```go
func CpuArchitectureInput() *string
```

- *Type:* *string

---

##### `OperatingSystemFamilyInput`<sup>Optional</sup> <a name="OperatingSystemFamilyInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamilyInput"></a>

```go
func OperatingSystemFamilyInput() *string
```

- *Type:* *string

---

##### `CpuArchitecture`<sup>Required</sup> <a name="CpuArchitecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture"></a>

```go
func CpuArchitecture() *string
```

- *Type:* *string

---

##### `OperatingSystemFamily`<sup>Required</sup> <a name="OperatingSystemFamily" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily"></a>

```go
func OperatingSystemFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsTaskDefinitionRuntimePlatform
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---


### EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetAutoprovision">ResetAutoprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriver">ResetDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriverOpts">ResetDriverOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoprovision` <a name="ResetAutoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetAutoprovision"></a>

```go
func ResetAutoprovision()
```

##### `ResetDriver` <a name="ResetDriver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriver"></a>

```go
func ResetDriver()
```

##### `ResetDriverOpts` <a name="ResetDriverOpts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriverOpts"></a>

```go
func ResetDriverOpts()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovisionInput">AutoprovisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverInput">DriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOptsInput">DriverOptsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovision">Autoprovision</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driver">Driver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOpts">DriverOpts</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoprovisionInput`<sup>Optional</sup> <a name="AutoprovisionInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovisionInput"></a>

```go
func AutoprovisionInput() interface{}
```

- *Type:* interface{}

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverInput"></a>

```go
func DriverInput() *string
```

- *Type:* *string

---

##### `DriverOptsInput`<sup>Optional</sup> <a name="DriverOptsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOptsInput"></a>

```go
func DriverOptsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `Autoprovision`<sup>Required</sup> <a name="Autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovision"></a>

```go
func Autoprovision() interface{}
```

- *Type:* interface{}

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driver"></a>

```go
func Driver() *string
```

- *Type:* *string

---

##### `DriverOpts`<sup>Required</sup> <a name="DriverOpts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOpts"></a>

```go
func DriverOpts() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsTaskDefinitionVolumeDockerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetAccessPointId">ResetAccessPointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetIam">ResetIam</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessPointId` <a name="ResetAccessPointId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetAccessPointId"></a>

```go
func ResetAccessPointId()
```

##### `ResetIam` <a name="ResetIam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetIam"></a>

```go
func ResetIam()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointIdInput">AccessPointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iamInput">IamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId">AccessPointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam">Iam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessPointIdInput`<sup>Optional</sup> <a name="AccessPointIdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointIdInput"></a>

```go
func AccessPointIdInput() *string
```

- *Type:* *string

---

##### `IamInput`<sup>Optional</sup> <a name="IamInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iamInput"></a>

```go
func IamInput() *string
```

- *Type:* *string

---

##### `AccessPointId`<sup>Required</sup> <a name="AccessPointId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId"></a>

```go
func AccessPointId() *string
```

- *Type:* *string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam"></a>

```go
func Iam() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---


### EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetRootDirectory">ResetRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryption">ResetTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryptionPort">ResetTransitEncryptionPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetAuthorizationConfig"></a>

```go
func ResetAuthorizationConfig()
```

##### `ResetRootDirectory` <a name="ResetRootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetRootDirectory"></a>

```go
func ResetRootDirectory()
```

##### `ResetTransitEncryption` <a name="ResetTransitEncryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryption"></a>

```go
func ResetTransitEncryption()
```

##### `ResetTransitEncryptionPort` <a name="ResetTransitEncryptionPort" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryptionPort"></a>

```go
func ResetTransitEncryptionPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionInput">TransitEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPortInput">TransitEncryptionPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryption">TransitEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPort">TransitEncryptionPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemIdInput"></a>

```go
func FileSystemIdInput() *string
```

- *Type:* *string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectoryInput"></a>

```go
func RootDirectoryInput() *string
```

- *Type:* *string

---

##### `TransitEncryptionInput`<sup>Optional</sup> <a name="TransitEncryptionInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionInput"></a>

```go
func TransitEncryptionInput() *string
```

- *Type:* *string

---

##### `TransitEncryptionPortInput`<sup>Optional</sup> <a name="TransitEncryptionPortInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPortInput"></a>

```go
func TransitEncryptionPortInput() *f64
```

- *Type:* *f64

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `TransitEncryption`<sup>Required</sup> <a name="TransitEncryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryption"></a>

```go
func TransitEncryption() *string
```

- *Type:* *string

---

##### `TransitEncryptionPort`<sup>Required</sup> <a name="TransitEncryptionPort" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPort"></a>

```go
func TransitEncryptionPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsTaskDefinitionVolumeEfsVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameterInput">CredentialsParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialsParameterInput`<sup>Optional</sup> <a name="CredentialsParameterInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameterInput"></a>

```go
func CredentialsParameterInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter"></a>

```go
func CredentialsParameter() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---


### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig"></a>

```go
func PutAuthorizationConfig(value EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfigInput"></a>

```go
func AuthorizationConfigInput() EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemIdInput"></a>

```go
func FileSystemIdInput() *string
```

- *Type:* *string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectoryInput"></a>

```go
func RootDirectoryInput() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeList <a name="EcsTaskDefinitionVolumeList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsTaskDefinitionVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get"></a>

```go
func Get(index *f64) EcsTaskDefinitionVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsTaskDefinitionVolumeOutputReference <a name="EcsTaskDefinitionVolumeOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecstaskdefinition"

ecstaskdefinition.NewEcsTaskDefinitionVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsTaskDefinitionVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration">PutDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration">PutEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration">PutFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetDockerVolumeConfiguration">ResetDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetEfsVolumeConfiguration">ResetEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetFsxWindowsFileServerVolumeConfiguration">ResetFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetHostPath">ResetHostPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDockerVolumeConfiguration` <a name="PutDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration"></a>

```go
func PutDockerVolumeConfiguration(value EcsTaskDefinitionVolumeDockerVolumeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---

##### `PutEfsVolumeConfiguration` <a name="PutEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration"></a>

```go
func PutEfsVolumeConfiguration(value EcsTaskDefinitionVolumeEfsVolumeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---

##### `PutFsxWindowsFileServerVolumeConfiguration` <a name="PutFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration"></a>

```go
func PutFsxWindowsFileServerVolumeConfiguration(value EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---

##### `ResetDockerVolumeConfiguration` <a name="ResetDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetDockerVolumeConfiguration"></a>

```go
func ResetDockerVolumeConfiguration()
```

##### `ResetEfsVolumeConfiguration` <a name="ResetEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetEfsVolumeConfiguration"></a>

```go
func ResetEfsVolumeConfiguration()
```

##### `ResetFsxWindowsFileServerVolumeConfiguration` <a name="ResetFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetFsxWindowsFileServerVolumeConfiguration"></a>

```go
func ResetFsxWindowsFileServerVolumeConfiguration()
```

##### `ResetHostPath` <a name="ResetHostPath" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetHostPath"></a>

```go
func ResetHostPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfiguration">DockerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfiguration">EfsVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfiguration">FsxWindowsFileServerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfigurationInput">DockerVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfigurationInput">EfsVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfigurationInput">FsxWindowsFileServerVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPathInput">HostPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPath">HostPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DockerVolumeConfiguration`<sup>Required</sup> <a name="DockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfiguration"></a>

```go
func DockerVolumeConfiguration() EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference</a>

---

##### `EfsVolumeConfiguration`<sup>Required</sup> <a name="EfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfiguration"></a>

```go
func EfsVolumeConfiguration() EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference</a>

---

##### `FsxWindowsFileServerVolumeConfiguration`<sup>Required</sup> <a name="FsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfiguration"></a>

```go
func FsxWindowsFileServerVolumeConfiguration() EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference</a>

---

##### `DockerVolumeConfigurationInput`<sup>Optional</sup> <a name="DockerVolumeConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfigurationInput"></a>

```go
func DockerVolumeConfigurationInput() EcsTaskDefinitionVolumeDockerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---

##### `EfsVolumeConfigurationInput`<sup>Optional</sup> <a name="EfsVolumeConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfigurationInput"></a>

```go
func EfsVolumeConfigurationInput() EcsTaskDefinitionVolumeEfsVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---

##### `FsxWindowsFileServerVolumeConfigurationInput`<sup>Optional</sup> <a name="FsxWindowsFileServerVolumeConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfigurationInput"></a>

```go
func FsxWindowsFileServerVolumeConfigurationInput() EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---

##### `HostPathInput`<sup>Optional</sup> <a name="HostPathInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPathInput"></a>

```go
func HostPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPath"></a>

```go
func HostPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



