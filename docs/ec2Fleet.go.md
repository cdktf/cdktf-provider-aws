# `ec2Fleet` Submodule <a name="`ec2Fleet` Submodule" id="@cdktf/provider-aws.ec2Fleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Fleet <a name="Ec2Fleet" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet aws_ec2_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2Fleet(scope Construct, id *string, config Ec2FleetConfig) Ec2Fleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig">Ec2FleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig">Ec2FleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig">PutLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putOnDemandOptions">PutOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions">PutSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification">PutTargetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetExcessCapacityTerminationPolicy">ResetExcessCapacityTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOnDemandOptions">ResetOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetReplaceUnhealthyInstances">ResetReplaceUnhealthyInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetSpotOptions">ResetSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstances">ResetTerminateInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstancesWithExpiration">ResetTerminateInstancesWithExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLaunchTemplateConfig` <a name="PutLaunchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig"></a>

```go
func PutLaunchTemplateConfig(value Ec2FleetLaunchTemplateConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

---

##### `PutOnDemandOptions` <a name="PutOnDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putOnDemandOptions"></a>

```go
func PutOnDemandOptions(value Ec2FleetOnDemandOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putOnDemandOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

---

##### `PutSpotOptions` <a name="PutSpotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions"></a>

```go
func PutSpotOptions(value Ec2FleetSpotOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

---

##### `PutTargetCapacitySpecification` <a name="PutTargetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification"></a>

```go
func PutTargetCapacitySpecification(value Ec2FleetTargetCapacitySpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts"></a>

```go
func PutTimeouts(value Ec2FleetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>

---

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetContext"></a>

```go
func ResetContext()
```

##### `ResetExcessCapacityTerminationPolicy` <a name="ResetExcessCapacityTerminationPolicy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetExcessCapacityTerminationPolicy"></a>

```go
func ResetExcessCapacityTerminationPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetId"></a>

```go
func ResetId()
```

##### `ResetOnDemandOptions` <a name="ResetOnDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOnDemandOptions"></a>

```go
func ResetOnDemandOptions()
```

##### `ResetReplaceUnhealthyInstances` <a name="ResetReplaceUnhealthyInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetReplaceUnhealthyInstances"></a>

```go
func ResetReplaceUnhealthyInstances()
```

##### `ResetSpotOptions` <a name="ResetSpotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetSpotOptions"></a>

```go
func ResetSpotOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTerminateInstances` <a name="ResetTerminateInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstances"></a>

```go
func ResetTerminateInstances()
```

##### `ResetTerminateInstancesWithExpiration` <a name="ResetTerminateInstancesWithExpiration" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstancesWithExpiration"></a>

```go
func ResetTerminateInstancesWithExpiration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.Ec2Fleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.Ec2Fleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.Ec2Fleet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfig">LaunchTemplateConfig</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference">Ec2FleetLaunchTemplateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptions">OnDemandOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference">Ec2FleetOnDemandOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference">Ec2FleetSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecification">TargetCapacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference">Ec2FleetTargetCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference">Ec2FleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicyInput">ExcessCapacityTerminationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfigInput">LaunchTemplateConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptionsInput">OnDemandOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstancesInput">ReplaceUnhealthyInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptionsInput">SpotOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecificationInput">TargetCapacitySpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesInput">TerminateInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpirationInput">TerminateInstancesWithExpirationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicy">ExcessCapacityTerminationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstances">ReplaceUnhealthyInstances</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstances">TerminateInstances</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpiration">TerminateInstancesWithExpiration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `LaunchTemplateConfig`<sup>Required</sup> <a name="LaunchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfig"></a>

```go
func LaunchTemplateConfig() Ec2FleetLaunchTemplateConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference">Ec2FleetLaunchTemplateConfigOutputReference</a>

---

##### `OnDemandOptions`<sup>Required</sup> <a name="OnDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptions"></a>

```go
func OnDemandOptions() Ec2FleetOnDemandOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference">Ec2FleetOnDemandOptionsOutputReference</a>

---

##### `SpotOptions`<sup>Required</sup> <a name="SpotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptions"></a>

```go
func SpotOptions() Ec2FleetSpotOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference">Ec2FleetSpotOptionsOutputReference</a>

---

##### `TargetCapacitySpecification`<sup>Required</sup> <a name="TargetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecification"></a>

```go
func TargetCapacitySpecification() Ec2FleetTargetCapacitySpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference">Ec2FleetTargetCapacitySpecificationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeouts"></a>

```go
func Timeouts() Ec2FleetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference">Ec2FleetTimeoutsOutputReference</a>

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `ExcessCapacityTerminationPolicyInput`<sup>Optional</sup> <a name="ExcessCapacityTerminationPolicyInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicyInput"></a>

```go
func ExcessCapacityTerminationPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LaunchTemplateConfigInput`<sup>Optional</sup> <a name="LaunchTemplateConfigInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfigInput"></a>

```go
func LaunchTemplateConfigInput() Ec2FleetLaunchTemplateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

---

##### `OnDemandOptionsInput`<sup>Optional</sup> <a name="OnDemandOptionsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptionsInput"></a>

```go
func OnDemandOptionsInput() Ec2FleetOnDemandOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

---

##### `ReplaceUnhealthyInstancesInput`<sup>Optional</sup> <a name="ReplaceUnhealthyInstancesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstancesInput"></a>

```go
func ReplaceUnhealthyInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `SpotOptionsInput`<sup>Optional</sup> <a name="SpotOptionsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptionsInput"></a>

```go
func SpotOptionsInput() Ec2FleetSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetCapacitySpecificationInput`<sup>Optional</sup> <a name="TargetCapacitySpecificationInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecificationInput"></a>

```go
func TargetCapacitySpecificationInput() Ec2FleetTargetCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

---

##### `TerminateInstancesInput`<sup>Optional</sup> <a name="TerminateInstancesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesInput"></a>

```go
func TerminateInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `TerminateInstancesWithExpirationInput`<sup>Optional</sup> <a name="TerminateInstancesWithExpirationInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpirationInput"></a>

```go
func TerminateInstancesWithExpirationInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `ExcessCapacityTerminationPolicy`<sup>Required</sup> <a name="ExcessCapacityTerminationPolicy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicy"></a>

```go
func ExcessCapacityTerminationPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReplaceUnhealthyInstances`<sup>Required</sup> <a name="ReplaceUnhealthyInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstances"></a>

```go
func ReplaceUnhealthyInstances() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerminateInstances`<sup>Required</sup> <a name="TerminateInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstances"></a>

```go
func TerminateInstances() interface{}
```

- *Type:* interface{}

---

##### `TerminateInstancesWithExpiration`<sup>Required</sup> <a name="TerminateInstancesWithExpiration" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpiration"></a>

```go
func TerminateInstancesWithExpiration() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FleetConfig <a name="Ec2FleetConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LaunchTemplateConfig: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfig,
	TargetCapacitySpecification: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetTargetCapacitySpecification,
	Context: *string,
	ExcessCapacityTerminationPolicy: *string,
	Id: *string,
	OnDemandOptions: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetOnDemandOptions,
	ReplaceUnhealthyInstances: interface{},
	SpotOptions: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetSpotOptions,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TerminateInstances: interface{},
	TerminateInstancesWithExpiration: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.launchTemplateConfig">LaunchTemplateConfig</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.targetCapacitySpecification">TargetCapacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | target_capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.context">Context</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.excessCapacityTerminationPolicy">ExcessCapacityTerminationPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.onDemandOptions">OnDemandOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | on_demand_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.replaceUnhealthyInstances">ReplaceUnhealthyInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | spot_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstances">TerminateInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstancesWithExpiration">TerminateInstancesWithExpiration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LaunchTemplateConfig`<sup>Required</sup> <a name="LaunchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.launchTemplateConfig"></a>

```go
LaunchTemplateConfig Ec2FleetLaunchTemplateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_config Ec2Fleet#launch_template_config}

---

##### `TargetCapacitySpecification`<sup>Required</sup> <a name="TargetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.targetCapacitySpecification"></a>

```go
TargetCapacitySpecification Ec2FleetTargetCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

target_capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_specification Ec2Fleet#target_capacity_specification}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.context"></a>

```go
Context *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}.

---

##### `ExcessCapacityTerminationPolicy`<sup>Optional</sup> <a name="ExcessCapacityTerminationPolicy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.excessCapacityTerminationPolicy"></a>

```go
ExcessCapacityTerminationPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnDemandOptions`<sup>Optional</sup> <a name="OnDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.onDemandOptions"></a>

```go
OnDemandOptions Ec2FleetOnDemandOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

on_demand_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_options Ec2Fleet#on_demand_options}

---

##### `ReplaceUnhealthyInstances`<sup>Optional</sup> <a name="ReplaceUnhealthyInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.replaceUnhealthyInstances"></a>

```go
ReplaceUnhealthyInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}.

---

##### `SpotOptions`<sup>Optional</sup> <a name="SpotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.spotOptions"></a>

```go
SpotOptions Ec2FleetSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_options Ec2Fleet#spot_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}.

---

##### `TerminateInstances`<sup>Optional</sup> <a name="TerminateInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstances"></a>

```go
TerminateInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}.

---

##### `TerminateInstancesWithExpiration`<sup>Optional</sup> <a name="TerminateInstancesWithExpiration" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstancesWithExpiration"></a>

```go
TerminateInstancesWithExpiration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.timeouts"></a>

```go
Timeouts Ec2FleetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#timeouts Ec2Fleet#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}.

---

### Ec2FleetLaunchTemplateConfig <a name="Ec2FleetLaunchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfig {
	LaunchTemplateSpecification: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification,
	Override: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.launchTemplateSpecification">LaunchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.override">Override</a></code> | <code>interface{}</code> | override block. |

---

##### `LaunchTemplateSpecification`<sup>Required</sup> <a name="LaunchTemplateSpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.launchTemplateSpecification"></a>

```go
LaunchTemplateSpecification Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_specification Ec2Fleet#launch_template_specification}

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.override"></a>

```go
Override interface{}
```

- *Type:* interface{}

override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#override Ec2Fleet#override}

---

### Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification <a name="Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification {
	Version: *string,
	LaunchTemplateId: *string,
	LaunchTemplateName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#version Ec2Fleet#version}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#version Ec2Fleet#version}.

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateId"></a>

```go
LaunchTemplateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}.

---

##### `LaunchTemplateName`<sup>Optional</sup> <a name="LaunchTemplateName" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateName"></a>

```go
LaunchTemplateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}.

---

### Ec2FleetLaunchTemplateConfigOverride <a name="Ec2FleetLaunchTemplateConfigOverride" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverride {
	AvailabilityZone: *string,
	InstanceRequirements: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements,
	InstanceType: *string,
	MaxPrice: *string,
	Priority: *f64,
	SubnetId: *string,
	WeightedCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#availability_zone Ec2Fleet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_type Ec2Fleet#instance_type}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.maxPrice">MaxPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max_price Ec2Fleet#max_price}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#priority Ec2Fleet#priority}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#subnet_id Ec2Fleet#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.weightedCapacity">WeightedCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#weighted_capacity Ec2Fleet#weighted_capacity}. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#availability_zone Ec2Fleet#availability_zone}.

---

##### `InstanceRequirements`<sup>Optional</sup> <a name="InstanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceRequirements"></a>

```go
InstanceRequirements Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_requirements Ec2Fleet#instance_requirements}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_type Ec2Fleet#instance_type}.

---

##### `MaxPrice`<sup>Optional</sup> <a name="MaxPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.maxPrice"></a>

```go
MaxPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max_price Ec2Fleet#max_price}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#priority Ec2Fleet#priority}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#subnet_id Ec2Fleet#subnet_id}.

---

##### `WeightedCapacity`<sup>Optional</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.weightedCapacity"></a>

```go
WeightedCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#weighted_capacity Ec2Fleet#weighted_capacity}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements {
	MemoryMib: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib,
	VcpuCount: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount,
	AcceleratorCount: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount,
	AcceleratorManufacturers: *[]*string,
	AcceleratorNames: *[]*string,
	AcceleratorTotalMemoryMib: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib,
	AcceleratorTypes: *[]*string,
	BareMetal: *string,
	BaselineEbsBandwidthMbps: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps,
	BurstablePerformance: *string,
	CpuManufacturers: *[]*string,
	ExcludedInstanceTypes: *[]*string,
	InstanceGenerations: *[]*string,
	LocalStorage: *string,
	LocalStorageTypes: *[]*string,
	MemoryGibPerVcpu: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu,
	NetworkInterfaceCount: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount,
	OnDemandMaxPricePercentageOverLowestPrice: *f64,
	RequireHibernateSupport: interface{},
	SpotMaxPricePercentageOverLowestPrice: *f64,
	TotalLocalStorageGb: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryMib">MemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.vcpuCount">VcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_manufacturers Ec2Fleet#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorNames">AcceleratorNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_names Ec2Fleet#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTotalMemoryMib">AcceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_types Ec2Fleet#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.bareMetal">BareMetal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#bare_metal Ec2Fleet#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.burstablePerformance">BurstablePerformance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#burstable_performance Ec2Fleet#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.cpuManufacturers">CpuManufacturers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#cpu_manufacturers Ec2Fleet#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excluded_instance_types Ec2Fleet#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.instanceGenerations">InstanceGenerations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_generations Ec2Fleet#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorage">LocalStorage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage Ec2Fleet#local_storage}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorageTypes">LocalStorageTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage_types Ec2Fleet#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryGibPerVcpu">MemoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#require_hibernate_support Ec2Fleet#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Fleet#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |

---

##### `MemoryMib`<sup>Required</sup> <a name="MemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryMib"></a>

```go
MemoryMib Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#memory_mib Ec2Fleet#memory_mib}

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.vcpuCount"></a>

```go
VcpuCount Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#vcpu_count Ec2Fleet#vcpu_count}

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorCount"></a>

```go
AcceleratorCount Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_count Ec2Fleet#accelerator_count}

---

##### `AcceleratorManufacturers`<sup>Optional</sup> <a name="AcceleratorManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorManufacturers"></a>

```go
AcceleratorManufacturers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_manufacturers Ec2Fleet#accelerator_manufacturers}.

---

##### `AcceleratorNames`<sup>Optional</sup> <a name="AcceleratorNames" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorNames"></a>

```go
AcceleratorNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_names Ec2Fleet#accelerator_names}.

---

##### `AcceleratorTotalMemoryMib`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```go
AcceleratorTotalMemoryMib Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_total_memory_mib Ec2Fleet#accelerator_total_memory_mib}

---

##### `AcceleratorTypes`<sup>Optional</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTypes"></a>

```go
AcceleratorTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_types Ec2Fleet#accelerator_types}.

---

##### `BareMetal`<sup>Optional</sup> <a name="BareMetal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.bareMetal"></a>

```go
BareMetal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#bare_metal Ec2Fleet#bare_metal}.

---

##### `BaselineEbsBandwidthMbps`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```go
BaselineEbsBandwidthMbps Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#baseline_ebs_bandwidth_mbps Ec2Fleet#baseline_ebs_bandwidth_mbps}

---

##### `BurstablePerformance`<sup>Optional</sup> <a name="BurstablePerformance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.burstablePerformance"></a>

```go
BurstablePerformance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#burstable_performance Ec2Fleet#burstable_performance}.

---

##### `CpuManufacturers`<sup>Optional</sup> <a name="CpuManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.cpuManufacturers"></a>

```go
CpuManufacturers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#cpu_manufacturers Ec2Fleet#cpu_manufacturers}.

---

##### `ExcludedInstanceTypes`<sup>Optional</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.excludedInstanceTypes"></a>

```go
ExcludedInstanceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excluded_instance_types Ec2Fleet#excluded_instance_types}.

---

##### `InstanceGenerations`<sup>Optional</sup> <a name="InstanceGenerations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.instanceGenerations"></a>

```go
InstanceGenerations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_generations Ec2Fleet#instance_generations}.

---

##### `LocalStorage`<sup>Optional</sup> <a name="LocalStorage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorage"></a>

```go
LocalStorage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage Ec2Fleet#local_storage}.

---

##### `LocalStorageTypes`<sup>Optional</sup> <a name="LocalStorageTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorageTypes"></a>

```go
LocalStorageTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage_types Ec2Fleet#local_storage_types}.

---

##### `MemoryGibPerVcpu`<sup>Optional</sup> <a name="MemoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryGibPerVcpu"></a>

```go
MemoryGibPerVcpu Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#memory_gib_per_vcpu Ec2Fleet#memory_gib_per_vcpu}

---

##### `NetworkInterfaceCount`<sup>Optional</sup> <a name="NetworkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.networkInterfaceCount"></a>

```go
NetworkInterfaceCount Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#network_interface_count Ec2Fleet#network_interface_count}

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```go
OnDemandMaxPricePercentageOverLowestPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}.

---

##### `RequireHibernateSupport`<sup>Optional</sup> <a name="RequireHibernateSupport" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.requireHibernateSupport"></a>

```go
RequireHibernateSupport interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#require_hibernate_support Ec2Fleet#require_hibernate_support}.

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```go
SpotMaxPricePercentageOverLowestPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Fleet#spot_max_price_percentage_over_lowest_price}.

---

##### `TotalLocalStorageGb`<sup>Optional</sup> <a name="TotalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.totalLocalStorageGb"></a>

```go
TotalLocalStorageGb Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_local_storage_gb Ec2Fleet#total_local_storage_gb}

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib {
	Min: *f64,
	Max: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount {
	Min: *f64,
	Max: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

### Ec2FleetOnDemandOptions <a name="Ec2FleetOnDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetOnDemandOptions {
	AllocationStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}. |

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}.

---

### Ec2FleetSpotOptions <a name="Ec2FleetSpotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetSpotOptions {
	AllocationStrategy: *string,
	InstanceInterruptionBehavior: *string,
	InstancePoolsToUseCount: *f64,
	MaintenanceStrategies: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.maintenanceStrategies">MaintenanceStrategies</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | maintenance_strategies block. |

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}.

---

##### `InstanceInterruptionBehavior`<sup>Optional</sup> <a name="InstanceInterruptionBehavior" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instanceInterruptionBehavior"></a>

```go
InstanceInterruptionBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}.

---

##### `InstancePoolsToUseCount`<sup>Optional</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instancePoolsToUseCount"></a>

```go
InstancePoolsToUseCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}.

---

##### `MaintenanceStrategies`<sup>Optional</sup> <a name="MaintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.maintenanceStrategies"></a>

```go
MaintenanceStrategies Ec2FleetSpotOptionsMaintenanceStrategies
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

maintenance_strategies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#maintenance_strategies Ec2Fleet#maintenance_strategies}

---

### Ec2FleetSpotOptionsMaintenanceStrategies <a name="Ec2FleetSpotOptionsMaintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetSpotOptionsMaintenanceStrategies {
	CapacityRebalance: github.com/cdktf/cdktf-provider-aws-go/aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies.property.capacityRebalance">CapacityRebalance</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | capacity_rebalance block. |

---

##### `CapacityRebalance`<sup>Optional</sup> <a name="CapacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies.property.capacityRebalance"></a>

```go
CapacityRebalance Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

capacity_rebalance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#capacity_rebalance Ec2Fleet#capacity_rebalance}

---

### Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance <a name="Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
	ReplacementStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.replacementStrategy">ReplacementStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}. |

---

##### `ReplacementStrategy`<sup>Optional</sup> <a name="ReplacementStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.replacementStrategy"></a>

```go
ReplacementStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}.

---

### Ec2FleetTargetCapacitySpecification <a name="Ec2FleetTargetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetTargetCapacitySpecification {
	DefaultTargetCapacityType: *string,
	TotalTargetCapacity: *f64,
	OnDemandTargetCapacity: *f64,
	SpotTargetCapacity: *f64,
	TargetCapacityUnitType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.defaultTargetCapacityType">DefaultTargetCapacityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.onDemandTargetCapacity">OnDemandTargetCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.spotTargetCapacity">SpotTargetCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.targetCapacityUnitType">TargetCapacityUnitType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_unit_type Ec2Fleet#target_capacity_unit_type}. |

---

##### `DefaultTargetCapacityType`<sup>Required</sup> <a name="DefaultTargetCapacityType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.defaultTargetCapacityType"></a>

```go
DefaultTargetCapacityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}.

---

##### `TotalTargetCapacity`<sup>Required</sup> <a name="TotalTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.totalTargetCapacity"></a>

```go
TotalTargetCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}.

---

##### `OnDemandTargetCapacity`<sup>Optional</sup> <a name="OnDemandTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.onDemandTargetCapacity"></a>

```go
OnDemandTargetCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}.

---

##### `SpotTargetCapacity`<sup>Optional</sup> <a name="SpotTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.spotTargetCapacity"></a>

```go
SpotTargetCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}.

---

##### `TargetCapacityUnitType`<sup>Optional</sup> <a name="TargetCapacityUnitType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.targetCapacityUnitType"></a>

```go
TargetCapacityUnitType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_unit_type Ec2Fleet#target_capacity_unit_type}.

---

### Ec2FleetTimeouts <a name="Ec2FleetTimeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

&ec2fleet.Ec2FleetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#create Ec2Fleet#create}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#delete Ec2Fleet#delete}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#update Ec2Fleet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#create Ec2Fleet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#delete Ec2Fleet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#update Ec2Fleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference <a name="Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName">ResetLaunchTemplateName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId"></a>

```go
func ResetLaunchTemplateId()
```

##### `ResetLaunchTemplateName` <a name="ResetLaunchTemplateName" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName"></a>

```go
func ResetLaunchTemplateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput">LaunchTemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput"></a>

```go
func LaunchTemplateIdInput() *string
```

- *Type:* *string

---

##### `LaunchTemplateNameInput`<sup>Optional</sup> <a name="LaunchTemplateNameInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput"></a>

```go
func LaunchTemplateNameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```go
func LaunchTemplateId() *string
```

- *Type:* *string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```go
func LaunchTemplateName() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

---


### Ec2FleetLaunchTemplateConfigOutputReference <a name="Ec2FleetLaunchTemplateConfigOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification">PutLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putOverride">PutOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchTemplateSpecification` <a name="PutLaunchTemplateSpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification"></a>

```go
func PutLaunchTemplateSpecification(value Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `PutOverride` <a name="PutOverride" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putOverride"></a>

```go
func PutOverride(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOverride` <a name="ResetOverride" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resetOverride"></a>

```go
func ResetOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecification">LaunchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.override">Override</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList">Ec2FleetLaunchTemplateConfigOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput">LaunchTemplateSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateSpecification`<sup>Required</sup> <a name="LaunchTemplateSpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecification"></a>

```go
func LaunchTemplateSpecification() Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a>

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.override"></a>

```go
func Override() Ec2FleetLaunchTemplateConfigOverrideList
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList">Ec2FleetLaunchTemplateConfigOverrideList</a>

---

##### `LaunchTemplateSpecificationInput`<sup>Optional</sup> <a name="LaunchTemplateSpecificationInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput"></a>

```go
func LaunchTemplateSpecificationInput() Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resetMax">ResetMax</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```go
func ResetMax()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount">PutAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">PutAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">PutBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu">PutMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib">PutMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount">PutNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb">PutTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount">PutVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorManufacturers">ResetAcceleratorManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorNames">ResetAcceleratorNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">ResetAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTypes">ResetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBareMetal">ResetBareMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">ResetBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBurstablePerformance">ResetBurstablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetCpuManufacturers">ResetCpuManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetExcludedInstanceTypes">ResetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetInstanceGenerations">ResetInstanceGenerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorage">ResetLocalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorageTypes">ResetLocalStorageTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">ResetMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetNetworkInterfaceCount">ResetNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">ResetOnDemandMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetRequireHibernateSupport">ResetRequireHibernateSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">ResetSpotMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetTotalLocalStorageGb">ResetTotalLocalStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorCount` <a name="PutAcceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```go
func PutAcceleratorCount(value Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

---

##### `PutAcceleratorTotalMemoryMib` <a name="PutAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```go
func PutAcceleratorTotalMemoryMib(value Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `PutBaselineEbsBandwidthMbps` <a name="PutBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```go
func PutBaselineEbsBandwidthMbps(value Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `PutMemoryGibPerVcpu` <a name="PutMemoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```go
func PutMemoryGibPerVcpu(value Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `PutMemoryMib` <a name="PutMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib"></a>

```go
func PutMemoryMib(value Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

---

##### `PutNetworkInterfaceCount` <a name="PutNetworkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```go
func PutNetworkInterfaceCount(value Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

---

##### `PutTotalLocalStorageGb` <a name="PutTotalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```go
func PutTotalLocalStorageGb(value Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

---

##### `PutVcpuCount` <a name="PutVcpuCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount"></a>

```go
func PutVcpuCount(value Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorManufacturers` <a name="ResetAcceleratorManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```go
func ResetAcceleratorManufacturers()
```

##### `ResetAcceleratorNames` <a name="ResetAcceleratorNames" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```go
func ResetAcceleratorNames()
```

##### `ResetAcceleratorTotalMemoryMib` <a name="ResetAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```go
func ResetAcceleratorTotalMemoryMib()
```

##### `ResetAcceleratorTypes` <a name="ResetAcceleratorTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```go
func ResetAcceleratorTypes()
```

##### `ResetBareMetal` <a name="ResetBareMetal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBareMetal"></a>

```go
func ResetBareMetal()
```

##### `ResetBaselineEbsBandwidthMbps` <a name="ResetBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```go
func ResetBaselineEbsBandwidthMbps()
```

##### `ResetBurstablePerformance` <a name="ResetBurstablePerformance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```go
func ResetBurstablePerformance()
```

##### `ResetCpuManufacturers` <a name="ResetCpuManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```go
func ResetCpuManufacturers()
```

##### `ResetExcludedInstanceTypes` <a name="ResetExcludedInstanceTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```go
func ResetExcludedInstanceTypes()
```

##### `ResetInstanceGenerations` <a name="ResetInstanceGenerations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```go
func ResetInstanceGenerations()
```

##### `ResetLocalStorage` <a name="ResetLocalStorage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorage"></a>

```go
func ResetLocalStorage()
```

##### `ResetLocalStorageTypes` <a name="ResetLocalStorageTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```go
func ResetLocalStorageTypes()
```

##### `ResetMemoryGibPerVcpu` <a name="ResetMemoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```go
func ResetMemoryGibPerVcpu()
```

##### `ResetNetworkInterfaceCount` <a name="ResetNetworkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```go
func ResetNetworkInterfaceCount()
```

##### `ResetOnDemandMaxPricePercentageOverLowestPrice` <a name="ResetOnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```go
func ResetOnDemandMaxPricePercentageOverLowestPrice()
```

##### `ResetRequireHibernateSupport` <a name="ResetRequireHibernateSupport" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```go
func ResetRequireHibernateSupport()
```

##### `ResetSpotMaxPricePercentageOverLowestPrice` <a name="ResetSpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```go
func ResetSpotMaxPricePercentageOverLowestPrice()
```

##### `ResetTotalLocalStorageGb` <a name="ResetTotalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```go
func ResetTotalLocalStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">AcceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpu">MemoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMib">MemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCount">VcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">AcceleratorManufacturersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNamesInput">AcceleratorNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">AcceleratorTotalMemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypesInput">AcceleratorTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetalInput">BareMetalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">BaselineEbsBandwidthMbpsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformanceInput">BurstablePerformanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturersInput">CpuManufacturersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">ExcludedInstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerationsInput">InstanceGenerationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageInput">LocalStorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypesInput">LocalStorageTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">MemoryGibPerVcpuInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMibInput">MemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCountInput">NetworkInterfaceCountInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">OnDemandMaxPricePercentageOverLowestPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupportInput">RequireHibernateSupportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">SpotMaxPricePercentageOverLowestPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">TotalLocalStorageGbInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCountInput">VcpuCountInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNames">AcceleratorNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetal">BareMetal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformance">BurstablePerformance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturers">CpuManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerations">InstanceGenerations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorage">LocalStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypes">LocalStorageTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `AcceleratorTotalMemoryMib`<sup>Required</sup> <a name="AcceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```go
func AcceleratorTotalMemoryMib() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `BaselineEbsBandwidthMbps`<sup>Required</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```go
func BaselineEbsBandwidthMbps() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `MemoryGibPerVcpu`<sup>Required</sup> <a name="MemoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```go
func MemoryGibPerVcpu() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `MemoryMib`<sup>Required</sup> <a name="MemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMib"></a>

```go
func MemoryMib() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference</a>

---

##### `NetworkInterfaceCount`<sup>Required</sup> <a name="NetworkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```go
func NetworkInterfaceCount() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `TotalLocalStorageGb`<sup>Required</sup> <a name="TotalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```go
func TotalLocalStorageGb() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCount"></a>

```go
func VcpuCount() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

---

##### `AcceleratorManufacturersInput`<sup>Optional</sup> <a name="AcceleratorManufacturersInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```go
func AcceleratorManufacturersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorNamesInput`<sup>Optional</sup> <a name="AcceleratorNamesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```go
func AcceleratorNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorTotalMemoryMibInput`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMibInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```go
func AcceleratorTotalMemoryMibInput() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `AcceleratorTypesInput`<sup>Optional</sup> <a name="AcceleratorTypesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```go
func AcceleratorTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BareMetalInput`<sup>Optional</sup> <a name="BareMetalInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```go
func BareMetalInput() *string
```

- *Type:* *string

---

##### `BaselineEbsBandwidthMbpsInput`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbpsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```go
func BaselineEbsBandwidthMbpsInput() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `BurstablePerformanceInput`<sup>Optional</sup> <a name="BurstablePerformanceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```go
func BurstablePerformanceInput() *string
```

- *Type:* *string

---

##### `CpuManufacturersInput`<sup>Optional</sup> <a name="CpuManufacturersInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```go
func CpuManufacturersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedInstanceTypesInput`<sup>Optional</sup> <a name="ExcludedInstanceTypesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```go
func ExcludedInstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceGenerationsInput`<sup>Optional</sup> <a name="InstanceGenerationsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```go
func InstanceGenerationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocalStorageInput`<sup>Optional</sup> <a name="LocalStorageInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageInput"></a>

```go
func LocalStorageInput() *string
```

- *Type:* *string

---

##### `LocalStorageTypesInput`<sup>Optional</sup> <a name="LocalStorageTypesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```go
func LocalStorageTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MemoryGibPerVcpuInput`<sup>Optional</sup> <a name="MemoryGibPerVcpuInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```go
func MemoryGibPerVcpuInput() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `MemoryMibInput`<sup>Optional</sup> <a name="MemoryMibInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```go
func MemoryMibInput() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

---

##### `NetworkInterfaceCountInput`<sup>Optional</sup> <a name="NetworkInterfaceCountInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```go
func NetworkInterfaceCountInput() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

---

##### `OnDemandMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```go
func OnDemandMaxPricePercentageOverLowestPriceInput() *f64
```

- *Type:* *f64

---

##### `RequireHibernateSupportInput`<sup>Optional</sup> <a name="RequireHibernateSupportInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```go
func RequireHibernateSupportInput() interface{}
```

- *Type:* interface{}

---

##### `SpotMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```go
func SpotMaxPricePercentageOverLowestPriceInput() *f64
```

- *Type:* *f64

---

##### `TotalLocalStorageGbInput`<sup>Optional</sup> <a name="TotalLocalStorageGbInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```go
func TotalLocalStorageGbInput() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

---

##### `VcpuCountInput`<sup>Optional</sup> <a name="VcpuCountInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```go
func VcpuCountInput() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

---

##### `AcceleratorManufacturers`<sup>Required</sup> <a name="AcceleratorManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```go
func AcceleratorManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorNames`<sup>Required</sup> <a name="AcceleratorNames" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```go
func AcceleratorNames() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```go
func AcceleratorTypes() *[]*string
```

- *Type:* *[]*string

---

##### `BareMetal`<sup>Required</sup> <a name="BareMetal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetal"></a>

```go
func BareMetal() *string
```

- *Type:* *string

---

##### `BurstablePerformance`<sup>Required</sup> <a name="BurstablePerformance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```go
func BurstablePerformance() *string
```

- *Type:* *string

---

##### `CpuManufacturers`<sup>Required</sup> <a name="CpuManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```go
func CpuManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```go
func ExcludedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceGenerations`<sup>Required</sup> <a name="InstanceGenerations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```go
func InstanceGenerations() *[]*string
```

- *Type:* *[]*string

---

##### `LocalStorage`<sup>Required</sup> <a name="LocalStorage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorage"></a>

```go
func LocalStorage() *string
```

- *Type:* *string

---

##### `LocalStorageTypes`<sup>Required</sup> <a name="LocalStorageTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```go
func LocalStorageTypes() *[]*string
```

- *Type:* *[]*string

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```go
func OnDemandMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `RequireHibernateSupport`<sup>Required</sup> <a name="RequireHibernateSupport" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```go
func RequireHibernateSupport() interface{}
```

- *Type:* interface{}

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```go
func SpotMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```go
func ResetMax()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

---


### Ec2FleetLaunchTemplateConfigOverrideList <a name="Ec2FleetLaunchTemplateConfigOverrideList" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2FleetLaunchTemplateConfigOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.get"></a>

```go
func Get(index *f64) Ec2FleetLaunchTemplateConfigOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FleetLaunchTemplateConfigOverrideOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetLaunchTemplateConfigOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2FleetLaunchTemplateConfigOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements">PutInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceRequirements">ResetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetMaxPrice">ResetMaxPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetWeightedCapacity">ResetWeightedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceRequirements` <a name="PutInstanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements"></a>

```go
func PutInstanceRequirements(value Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetInstanceRequirements` <a name="ResetInstanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceRequirements"></a>

```go
func ResetInstanceRequirements()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetMaxPrice` <a name="ResetMaxPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetMaxPrice"></a>

```go
func ResetMaxPrice()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetWeightedCapacity` <a name="ResetWeightedCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetWeightedCapacity"></a>

```go
func ResetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirementsInput">InstanceRequirementsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPriceInput">MaxPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacityInput">WeightedCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPrice">MaxPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirements"></a>

```go
func InstanceRequirements() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `InstanceRequirementsInput`<sup>Optional</sup> <a name="InstanceRequirementsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirementsInput"></a>

```go
func InstanceRequirementsInput() Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `MaxPriceInput`<sup>Optional</sup> <a name="MaxPriceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPriceInput"></a>

```go
func MaxPriceInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `WeightedCapacityInput`<sup>Optional</sup> <a name="WeightedCapacityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacityInput"></a>

```go
func WeightedCapacityInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `MaxPrice`<sup>Required</sup> <a name="MaxPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPrice"></a>

```go
func MaxPrice() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacity"></a>

```go
func WeightedCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FleetOnDemandOptionsOutputReference <a name="Ec2FleetOnDemandOptionsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetOnDemandOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetOnDemandOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resetAllocationStrategy"></a>

```go
func ResetAllocationStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetOnDemandOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

---


### Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference <a name="Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy">ResetReplacementStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplacementStrategy` <a name="ResetReplacementStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy"></a>

```go
func ResetReplacementStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput">ReplacementStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">ReplacementStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplacementStrategyInput`<sup>Optional</sup> <a name="ReplacementStrategyInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput"></a>

```go
func ReplacementStrategyInput() *string
```

- *Type:* *string

---

##### `ReplacementStrategy`<sup>Required</sup> <a name="ReplacementStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```go
func ReplacementStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---


### Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference <a name="Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetSpotOptionsMaintenanceStrategiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance">PutCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resetCapacityRebalance">ResetCapacityRebalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityRebalance` <a name="PutCapacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance"></a>

```go
func PutCapacityRebalance(value Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---

##### `ResetCapacityRebalance` <a name="ResetCapacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resetCapacityRebalance"></a>

```go
func ResetCapacityRebalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance">CapacityRebalance</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalanceInput">CapacityRebalanceInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityRebalance`<sup>Required</sup> <a name="CapacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```go
func CapacityRebalance() Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `CapacityRebalanceInput`<sup>Optional</sup> <a name="CapacityRebalanceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalanceInput"></a>

```go
func CapacityRebalanceInput() Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetSpotOptionsMaintenanceStrategies
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

---


### Ec2FleetSpotOptionsOutputReference <a name="Ec2FleetSpotOptionsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetSpotOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetSpotOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies">PutMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstanceInterruptionBehavior">ResetInstanceInterruptionBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstancePoolsToUseCount">ResetInstancePoolsToUseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetMaintenanceStrategies">ResetMaintenanceStrategies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceStrategies` <a name="PutMaintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies"></a>

```go
func PutMaintenanceStrategies(value Ec2FleetSpotOptionsMaintenanceStrategies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

---

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetAllocationStrategy"></a>

```go
func ResetAllocationStrategy()
```

##### `ResetInstanceInterruptionBehavior` <a name="ResetInstanceInterruptionBehavior" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstanceInterruptionBehavior"></a>

```go
func ResetInstanceInterruptionBehavior()
```

##### `ResetInstancePoolsToUseCount` <a name="ResetInstancePoolsToUseCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstancePoolsToUseCount"></a>

```go
func ResetInstancePoolsToUseCount()
```

##### `ResetMaintenanceStrategies` <a name="ResetMaintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetMaintenanceStrategies"></a>

```go
func ResetMaintenanceStrategies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies">MaintenanceStrategies</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput">InstanceInterruptionBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCountInput">InstancePoolsToUseCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategiesInput">MaintenanceStrategiesInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaintenanceStrategies`<sup>Required</sup> <a name="MaintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies"></a>

```go
func MaintenanceStrategies() Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a>

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `InstanceInterruptionBehaviorInput`<sup>Optional</sup> <a name="InstanceInterruptionBehaviorInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput"></a>

```go
func InstanceInterruptionBehaviorInput() *string
```

- *Type:* *string

---

##### `InstancePoolsToUseCountInput`<sup>Optional</sup> <a name="InstancePoolsToUseCountInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCountInput"></a>

```go
func InstancePoolsToUseCountInput() *f64
```

- *Type:* *f64

---

##### `MaintenanceStrategiesInput`<sup>Optional</sup> <a name="MaintenanceStrategiesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategiesInput"></a>

```go
func MaintenanceStrategiesInput() Ec2FleetSpotOptionsMaintenanceStrategies
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InstanceInterruptionBehavior`<sup>Required</sup> <a name="InstanceInterruptionBehavior" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```go
func InstanceInterruptionBehavior() *string
```

- *Type:* *string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount"></a>

```go
func InstancePoolsToUseCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

---


### Ec2FleetTargetCapacitySpecificationOutputReference <a name="Ec2FleetTargetCapacitySpecificationOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetTargetCapacitySpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetTargetCapacitySpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetOnDemandTargetCapacity">ResetOnDemandTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetSpotTargetCapacity">ResetSpotTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetTargetCapacityUnitType">ResetTargetCapacityUnitType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnDemandTargetCapacity` <a name="ResetOnDemandTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetOnDemandTargetCapacity"></a>

```go
func ResetOnDemandTargetCapacity()
```

##### `ResetSpotTargetCapacity` <a name="ResetSpotTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetSpotTargetCapacity"></a>

```go
func ResetSpotTargetCapacity()
```

##### `ResetTargetCapacityUnitType` <a name="ResetTargetCapacityUnitType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetTargetCapacityUnitType"></a>

```go
func ResetTargetCapacityUnitType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityTypeInput">DefaultTargetCapacityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacityInput">OnDemandTargetCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacityInput">SpotTargetCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitTypeInput">TargetCapacityUnitTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacityInput">TotalTargetCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType">DefaultTargetCapacityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity">OnDemandTargetCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity">SpotTargetCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType">TargetCapacityUnitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity">TotalTargetCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultTargetCapacityTypeInput`<sup>Optional</sup> <a name="DefaultTargetCapacityTypeInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityTypeInput"></a>

```go
func DefaultTargetCapacityTypeInput() *string
```

- *Type:* *string

---

##### `OnDemandTargetCapacityInput`<sup>Optional</sup> <a name="OnDemandTargetCapacityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacityInput"></a>

```go
func OnDemandTargetCapacityInput() *f64
```

- *Type:* *f64

---

##### `SpotTargetCapacityInput`<sup>Optional</sup> <a name="SpotTargetCapacityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacityInput"></a>

```go
func SpotTargetCapacityInput() *f64
```

- *Type:* *f64

---

##### `TargetCapacityUnitTypeInput`<sup>Optional</sup> <a name="TargetCapacityUnitTypeInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitTypeInput"></a>

```go
func TargetCapacityUnitTypeInput() *string
```

- *Type:* *string

---

##### `TotalTargetCapacityInput`<sup>Optional</sup> <a name="TotalTargetCapacityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacityInput"></a>

```go
func TotalTargetCapacityInput() *f64
```

- *Type:* *f64

---

##### `DefaultTargetCapacityType`<sup>Required</sup> <a name="DefaultTargetCapacityType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType"></a>

```go
func DefaultTargetCapacityType() *string
```

- *Type:* *string

---

##### `OnDemandTargetCapacity`<sup>Required</sup> <a name="OnDemandTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity"></a>

```go
func OnDemandTargetCapacity() *f64
```

- *Type:* *f64

---

##### `SpotTargetCapacity`<sup>Required</sup> <a name="SpotTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity"></a>

```go
func SpotTargetCapacity() *f64
```

- *Type:* *f64

---

##### `TargetCapacityUnitType`<sup>Required</sup> <a name="TargetCapacityUnitType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType"></a>

```go
func TargetCapacityUnitType() *string
```

- *Type:* *string

---

##### `TotalTargetCapacity`<sup>Required</sup> <a name="TotalTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity"></a>

```go
func TotalTargetCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2FleetTargetCapacitySpecification
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

---


### Ec2FleetTimeoutsOutputReference <a name="Ec2FleetTimeoutsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2fleet"

ec2fleet.NewEc2FleetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FleetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



