# `emrInstanceFleet` Submodule <a name="`emrInstanceFleet` Submodule" id="@cdktf/provider-aws.emrInstanceFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrInstanceFleet <a name="EmrInstanceFleet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet aws_emr_instance_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleet(scope Construct, id *string, config EmrInstanceFleetConfig) EmrInstanceFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig">EmrInstanceFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig">EmrInstanceFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putInstanceTypeConfigs">PutInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putLaunchSpecifications">PutLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetInstanceTypeConfigs">ResetInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetLaunchSpecifications">ResetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetTargetOnDemandCapacity">ResetTargetOnDemandCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetTargetSpotCapacity">ResetTargetSpotCapacity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInstanceTypeConfigs` <a name="PutInstanceTypeConfigs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putInstanceTypeConfigs"></a>

```go
func PutInstanceTypeConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLaunchSpecifications` <a name="PutLaunchSpecifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putLaunchSpecifications"></a>

```go
func PutLaunchSpecifications(value EmrInstanceFleetLaunchSpecifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.putLaunchSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceTypeConfigs` <a name="ResetInstanceTypeConfigs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetInstanceTypeConfigs"></a>

```go
func ResetInstanceTypeConfigs()
```

##### `ResetLaunchSpecifications` <a name="ResetLaunchSpecifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetLaunchSpecifications"></a>

```go
func ResetLaunchSpecifications()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetName"></a>

```go
func ResetName()
```

##### `ResetTargetOnDemandCapacity` <a name="ResetTargetOnDemandCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetTargetOnDemandCapacity"></a>

```go
func ResetTargetOnDemandCapacity()
```

##### `ResetTargetSpotCapacity` <a name="ResetTargetSpotCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.resetTargetSpotCapacity"></a>

```go
func ResetTargetSpotCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.EmrInstanceFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.EmrInstanceFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.EmrInstanceFleet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.instanceTypeConfigs">InstanceTypeConfigs</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList">EmrInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.launchSpecifications">LaunchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference">EmrInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisionedOnDemandCapacity">ProvisionedOnDemandCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisionedSpotCapacity">ProvisionedSpotCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.instanceTypeConfigsInput">InstanceTypeConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.launchSpecificationsInput">LaunchSpecificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetOnDemandCapacityInput">TargetOnDemandCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetSpotCapacityInput">TargetSpotCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetOnDemandCapacity">TargetOnDemandCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetSpotCapacity">TargetSpotCapacity</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceTypeConfigs`<sup>Required</sup> <a name="InstanceTypeConfigs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.instanceTypeConfigs"></a>

```go
func InstanceTypeConfigs() EmrInstanceFleetInstanceTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList">EmrInstanceFleetInstanceTypeConfigsList</a>

---

##### `LaunchSpecifications`<sup>Required</sup> <a name="LaunchSpecifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.launchSpecifications"></a>

```go
func LaunchSpecifications() EmrInstanceFleetLaunchSpecificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference">EmrInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `ProvisionedOnDemandCapacity`<sup>Required</sup> <a name="ProvisionedOnDemandCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisionedOnDemandCapacity"></a>

```go
func ProvisionedOnDemandCapacity() *f64
```

- *Type:* *f64

---

##### `ProvisionedSpotCapacity`<sup>Required</sup> <a name="ProvisionedSpotCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.provisionedSpotCapacity"></a>

```go
func ProvisionedSpotCapacity() *f64
```

- *Type:* *f64

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTypeConfigsInput`<sup>Optional</sup> <a name="InstanceTypeConfigsInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.instanceTypeConfigsInput"></a>

```go
func InstanceTypeConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `LaunchSpecificationsInput`<sup>Optional</sup> <a name="LaunchSpecificationsInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.launchSpecificationsInput"></a>

```go
func LaunchSpecificationsInput() EmrInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetOnDemandCapacityInput`<sup>Optional</sup> <a name="TargetOnDemandCapacityInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetOnDemandCapacityInput"></a>

```go
func TargetOnDemandCapacityInput() *f64
```

- *Type:* *f64

---

##### `TargetSpotCapacityInput`<sup>Optional</sup> <a name="TargetSpotCapacityInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetSpotCapacityInput"></a>

```go
func TargetSpotCapacityInput() *f64
```

- *Type:* *f64

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetOnDemandCapacity`<sup>Required</sup> <a name="TargetOnDemandCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetOnDemandCapacity"></a>

```go
func TargetOnDemandCapacity() *f64
```

- *Type:* *f64

---

##### `TargetSpotCapacity`<sup>Required</sup> <a name="TargetSpotCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.targetSpotCapacity"></a>

```go
func TargetSpotCapacity() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrInstanceFleetConfig <a name="EmrInstanceFleetConfig" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

&emrinstancefleet.EmrInstanceFleetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Id: *string,
	InstanceTypeConfigs: interface{},
	LaunchSpecifications: github.com/cdktf/cdktf-provider-aws-go/aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications,
	Name: *string,
	TargetOnDemandCapacity: *f64,
	TargetSpotCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#cluster_id EmrInstanceFleet#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#id EmrInstanceFleet#id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.instanceTypeConfigs">InstanceTypeConfigs</a></code> | <code>interface{}</code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.launchSpecifications">LaunchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#name EmrInstanceFleet#name}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.targetOnDemandCapacity">TargetOnDemandCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.targetSpotCapacity">TargetSpotCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_spot_capacity EmrInstanceFleet#target_spot_capacity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#cluster_id EmrInstanceFleet#cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#id EmrInstanceFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceTypeConfigs`<sup>Optional</sup> <a name="InstanceTypeConfigs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.instanceTypeConfigs"></a>

```go
InstanceTypeConfigs interface{}
```

- *Type:* interface{}

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#instance_type_configs EmrInstanceFleet#instance_type_configs}

---

##### `LaunchSpecifications`<sup>Optional</sup> <a name="LaunchSpecifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.launchSpecifications"></a>

```go
LaunchSpecifications EmrInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#launch_specifications EmrInstanceFleet#launch_specifications}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#name EmrInstanceFleet#name}.

---

##### `TargetOnDemandCapacity`<sup>Optional</sup> <a name="TargetOnDemandCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.targetOnDemandCapacity"></a>

```go
TargetOnDemandCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}.

---

##### `TargetSpotCapacity`<sup>Optional</sup> <a name="TargetSpotCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetConfig.property.targetSpotCapacity"></a>

```go
TargetSpotCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#target_spot_capacity EmrInstanceFleet#target_spot_capacity}.

---

### EmrInstanceFleetInstanceTypeConfigs <a name="EmrInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

&emrinstancefleet.EmrInstanceFleetInstanceTypeConfigs {
	InstanceType: *string,
	BidPrice: *string,
	BidPriceAsPercentageOfOnDemandPrice: *f64,
	Configurations: interface{},
	EbsConfig: interface{},
	WeightedCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#instance_type EmrInstanceFleet#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.bidPrice">BidPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#bid_price EmrInstanceFleet#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">BidPriceAsPercentageOfOnDemandPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#bid_price_as_percentage_of_on_demand_price EmrInstanceFleet#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.configurations">Configurations</a></code> | <code>interface{}</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.ebsConfig">EbsConfig</a></code> | <code>interface{}</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.weightedCapacity">WeightedCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#weighted_capacity EmrInstanceFleet#weighted_capacity}. |

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#instance_type EmrInstanceFleet#instance_type}.

---

##### `BidPrice`<sup>Optional</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```go
BidPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#bid_price EmrInstanceFleet#bid_price}.

---

##### `BidPriceAsPercentageOfOnDemandPrice`<sup>Optional</sup> <a name="BidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```go
BidPriceAsPercentageOfOnDemandPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#bid_price_as_percentage_of_on_demand_price EmrInstanceFleet#bid_price_as_percentage_of_on_demand_price}.

---

##### `Configurations`<sup>Optional</sup> <a name="Configurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```go
Configurations interface{}
```

- *Type:* interface{}

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#configurations EmrInstanceFleet#configurations}

---

##### `EbsConfig`<sup>Optional</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```go
EbsConfig interface{}
```

- *Type:* interface{}

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#ebs_config EmrInstanceFleet#ebs_config}

---

##### `WeightedCapacity`<sup>Optional</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```go
WeightedCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#weighted_capacity EmrInstanceFleet#weighted_capacity}.

---

### EmrInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

&emrinstancefleet.EmrInstanceFleetInstanceTypeConfigsConfigurations {
	Classification: *string,
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.property.classification">Classification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#classification EmrInstanceFleet#classification}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#properties EmrInstanceFleet#properties}. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```go
Classification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#classification EmrInstanceFleet#classification}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#properties EmrInstanceFleet#properties}.

---

### EmrInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

&emrinstancefleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig {
	Size: *f64,
	Type: *string,
	Iops: *f64,
	VolumesPerInstance: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#size EmrInstanceFleet#size}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#type EmrInstanceFleet#type}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#iops EmrInstanceFleet#iops}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#volumes_per_instance EmrInstanceFleet#volumes_per_instance}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#size EmrInstanceFleet#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#type EmrInstanceFleet#type}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#iops EmrInstanceFleet#iops}.

---

##### `VolumesPerInstance`<sup>Optional</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```go
VolumesPerInstance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#volumes_per_instance EmrInstanceFleet#volumes_per_instance}.

---

### EmrInstanceFleetLaunchSpecifications <a name="EmrInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

&emrinstancefleet.EmrInstanceFleetLaunchSpecifications {
	OnDemandSpecification: interface{},
	SpotSpecification: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.property.onDemandSpecification">OnDemandSpecification</a></code> | <code>interface{}</code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.property.spotSpecification">SpotSpecification</a></code> | <code>interface{}</code> | spot_specification block. |

---

##### `OnDemandSpecification`<sup>Optional</sup> <a name="OnDemandSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```go
OnDemandSpecification interface{}
```

- *Type:* interface{}

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#on_demand_specification EmrInstanceFleet#on_demand_specification}

---

##### `SpotSpecification`<sup>Optional</sup> <a name="SpotSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```go
SpotSpecification interface{}
```

- *Type:* interface{}

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#spot_specification EmrInstanceFleet#spot_specification}

---

### EmrInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

&emrinstancefleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification {
	AllocationStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}.

---

### EmrInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

&emrinstancefleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification {
	AllocationStrategy: *string,
	TimeoutAction: *string,
	TimeoutDurationMinutes: *f64,
	BlockDurationMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#timeout_action EmrInstanceFleet#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">TimeoutDurationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#timeout_duration_minutes EmrInstanceFleet#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#block_duration_minutes EmrInstanceFleet#block_duration_minutes}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}.

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```go
TimeoutAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#timeout_action EmrInstanceFleet#timeout_action}.

---

##### `TimeoutDurationMinutes`<sup>Required</sup> <a name="TimeoutDurationMinutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```go
TimeoutDurationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#timeout_duration_minutes EmrInstanceFleet#timeout_duration_minutes}.

---

##### `BlockDurationMinutes`<sup>Optional</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```go
BlockDurationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet#block_duration_minutes EmrInstanceFleet#block_duration_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetInstanceTypeConfigsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrInstanceFleetInstanceTypeConfigsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```go
func Get(index *f64) EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```go
func ResetClassification()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">Classification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```go
func ClassificationInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```go
func Classification() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetInstanceTypeConfigsEbsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrInstanceFleetInstanceTypeConfigsEbsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```go
func Get(index *f64) EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">ResetVolumesPerInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetVolumesPerInstance` <a name="ResetVolumesPerInstance" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```go
func ResetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">VolumesPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VolumesPerInstanceInput`<sup>Optional</sup> <a name="VolumesPerInstanceInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```go
func VolumesPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VolumesPerInstance`<sup>Required</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```go
func VolumesPerInstance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceFleetInstanceTypeConfigsList <a name="EmrInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetInstanceTypeConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrInstanceFleetInstanceTypeConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.get"></a>

```go
func Get(index *f64) EmrInstanceFleetInstanceTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetInstanceTypeConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrInstanceFleetInstanceTypeConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">PutEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">ResetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">ResetBidPriceAsPercentageOfOnDemandPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">ResetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">ResetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">ResetWeightedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurations` <a name="PutConfigurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```go
func PutConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEbsConfig` <a name="PutEbsConfig" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```go
func PutEbsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBidPrice` <a name="ResetBidPrice" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```go
func ResetBidPrice()
```

##### `ResetBidPriceAsPercentageOfOnDemandPrice` <a name="ResetBidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```go
func ResetBidPriceAsPercentageOfOnDemandPrice()
```

##### `ResetConfigurations` <a name="ResetConfigurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```go
func ResetConfigurations()
```

##### `ResetEbsConfig` <a name="ResetEbsConfig" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```go
func ResetEbsConfig()
```

##### `ResetWeightedCapacity` <a name="ResetWeightedCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```go
func ResetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList">EmrInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">EbsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList">EmrInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">BidPriceAsPercentageOfOnDemandPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">BidPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">ConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">EbsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">WeightedCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">BidPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">BidPriceAsPercentageOfOnDemandPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```go
func Configurations() EmrInstanceFleetInstanceTypeConfigsConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsConfigurationsList">EmrInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `EbsConfig`<sup>Required</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```go
func EbsConfig() EmrInstanceFleetInstanceTypeConfigsEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsEbsConfigList">EmrInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `BidPriceAsPercentageOfOnDemandPriceInput`<sup>Optional</sup> <a name="BidPriceAsPercentageOfOnDemandPriceInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```go
func BidPriceAsPercentageOfOnDemandPriceInput() *f64
```

- *Type:* *f64

---

##### `BidPriceInput`<sup>Optional</sup> <a name="BidPriceInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```go
func BidPriceInput() *string
```

- *Type:* *string

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```go
func ConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `EbsConfigInput`<sup>Optional</sup> <a name="EbsConfigInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```go
func EbsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `WeightedCapacityInput`<sup>Optional</sup> <a name="WeightedCapacityInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```go
func WeightedCapacityInput() *f64
```

- *Type:* *f64

---

##### `BidPrice`<sup>Required</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```go
func BidPrice() *string
```

- *Type:* *string

---

##### `BidPriceAsPercentageOfOnDemandPrice`<sup>Required</sup> <a name="BidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```go
func BidPriceAsPercentageOfOnDemandPrice() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```go
func WeightedCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```go
func Get(index *f64) EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceFleetLaunchSpecificationsOutputReference <a name="EmrInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetLaunchSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrInstanceFleetLaunchSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">PutOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">PutSpotSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">ResetOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">ResetSpotSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnDemandSpecification` <a name="PutOnDemandSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```go
func PutOnDemandSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSpotSpecification` <a name="PutSpotSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```go
func PutSpotSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOnDemandSpecification` <a name="ResetOnDemandSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```go
func ResetOnDemandSpecification()
```

##### `ResetSpotSpecification` <a name="ResetSpotSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```go
func ResetSpotSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">OnDemandSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">SpotSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">OnDemandSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">SpotSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDemandSpecification`<sup>Required</sup> <a name="OnDemandSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```go
func OnDemandSpecification() EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `SpotSpecification`<sup>Required</sup> <a name="SpotSpecification" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```go
func SpotSpecification() EmrInstanceFleetLaunchSpecificationsSpotSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `OnDemandSpecificationInput`<sup>Optional</sup> <a name="OnDemandSpecificationInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```go
func OnDemandSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `SpotSpecificationInput`<sup>Optional</sup> <a name="SpotSpecificationInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```go
func SpotSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrInstanceFleetLaunchSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecifications">EmrInstanceFleetLaunchSpecifications</a>

---


### EmrInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetLaunchSpecificationsSpotSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrInstanceFleetLaunchSpecificationsSpotSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```go
func Get(index *f64) EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrinstancefleet"

emrinstancefleet.NewEmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">ResetBlockDurationMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockDurationMinutes` <a name="ResetBlockDurationMinutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```go
func ResetBlockDurationMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">BlockDurationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">TimeoutActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">TimeoutDurationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">TimeoutDurationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `BlockDurationMinutesInput`<sup>Optional</sup> <a name="BlockDurationMinutesInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```go
func BlockDurationMinutesInput() *f64
```

- *Type:* *f64

---

##### `TimeoutActionInput`<sup>Optional</sup> <a name="TimeoutActionInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```go
func TimeoutActionInput() *string
```

- *Type:* *string

---

##### `TimeoutDurationMinutesInput`<sup>Optional</sup> <a name="TimeoutDurationMinutesInput" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```go
func TimeoutDurationMinutesInput() *f64
```

- *Type:* *f64

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `BlockDurationMinutes`<sup>Required</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```go
func BlockDurationMinutes() *f64
```

- *Type:* *f64

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```go
func TimeoutAction() *string
```

- *Type:* *string

---

##### `TimeoutDurationMinutes`<sup>Required</sup> <a name="TimeoutDurationMinutes" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```go
func TimeoutDurationMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceFleet.EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



