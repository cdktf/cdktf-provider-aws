# `eksNodeGroup` Submodule <a name="`eksNodeGroup` Submodule" id="@cdktf/provider-aws.eksNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksNodeGroup <a name="EksNodeGroup" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group aws_eks_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroup(scope Construct, id *string, config EksNodeGroupConfig) EksNodeGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig">EksNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig">EksNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putRemoteAccess">PutRemoteAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putScalingConfig">PutScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTaint">PutTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putUpdateConfig">PutUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetAmiType">ResetAmiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetCapacityType">ResetCapacityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetDiskSize">ResetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetForceUpdateVersion">ResetForceUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetInstanceTypes">ResetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetLaunchTemplate">ResetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetNodeGroupName">ResetNodeGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetNodeGroupNamePrefix">ResetNodeGroupNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetReleaseVersion">ResetReleaseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetRemoteAccess">ResetRemoteAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTaint">ResetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetUpdateConfig">ResetUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putLaunchTemplate"></a>

```go
func PutLaunchTemplate(value EksNodeGroupLaunchTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

---

##### `PutRemoteAccess` <a name="PutRemoteAccess" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putRemoteAccess"></a>

```go
func PutRemoteAccess(value EksNodeGroupRemoteAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putRemoteAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

---

##### `PutScalingConfig` <a name="PutScalingConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putScalingConfig"></a>

```go
func PutScalingConfig(value EksNodeGroupScalingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

---

##### `PutTaint` <a name="PutTaint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTaint"></a>

```go
func PutTaint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTaint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTimeouts"></a>

```go
func PutTimeouts(value EksNodeGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>

---

##### `PutUpdateConfig` <a name="PutUpdateConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putUpdateConfig"></a>

```go
func PutUpdateConfig(value EksNodeGroupUpdateConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putUpdateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

---

##### `ResetAmiType` <a name="ResetAmiType" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetAmiType"></a>

```go
func ResetAmiType()
```

##### `ResetCapacityType` <a name="ResetCapacityType" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetCapacityType"></a>

```go
func ResetCapacityType()
```

##### `ResetDiskSize` <a name="ResetDiskSize" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetDiskSize"></a>

```go
func ResetDiskSize()
```

##### `ResetForceUpdateVersion` <a name="ResetForceUpdateVersion" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetForceUpdateVersion"></a>

```go
func ResetForceUpdateVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceTypes` <a name="ResetInstanceTypes" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetInstanceTypes"></a>

```go
func ResetInstanceTypes()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetLaunchTemplate"></a>

```go
func ResetLaunchTemplate()
```

##### `ResetNodeGroupName` <a name="ResetNodeGroupName" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetNodeGroupName"></a>

```go
func ResetNodeGroupName()
```

##### `ResetNodeGroupNamePrefix` <a name="ResetNodeGroupNamePrefix" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetNodeGroupNamePrefix"></a>

```go
func ResetNodeGroupNamePrefix()
```

##### `ResetReleaseVersion` <a name="ResetReleaseVersion" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetReleaseVersion"></a>

```go
func ResetReleaseVersion()
```

##### `ResetRemoteAccess` <a name="ResetRemoteAccess" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetRemoteAccess"></a>

```go
func ResetRemoteAccess()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTaint` <a name="ResetTaint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTaint"></a>

```go
func ResetTaint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdateConfig` <a name="ResetUpdateConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetUpdateConfig"></a>

```go
func ResetUpdateConfig()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.EksNodeGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.EksNodeGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.EksNodeGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference">EksNodeGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.remoteAccess">RemoteAccess</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference">EksNodeGroupRemoteAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList">EksNodeGroupResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference">EksNodeGroupScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.taint">Taint</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList">EksNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference">EksNodeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.updateConfig">UpdateConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference">EksNodeGroupUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.amiTypeInput">AmiTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.capacityTypeInput">CapacityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.diskSizeInput">DiskSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forceUpdateVersionInput">ForceUpdateVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNameInput">NodeGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefixInput">NodeGroupNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeRoleArnInput">NodeRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.releaseVersionInput">ReleaseVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.remoteAccessInput">RemoteAccessInput</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.scalingConfigInput">ScalingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.taintInput">TaintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.updateConfigInput">UpdateConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.amiType">AmiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.capacityType">CapacityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.diskSize">DiskSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forceUpdateVersion">ForceUpdateVersion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupName">NodeGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefix">NodeGroupNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeRoleArn">NodeRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.releaseVersion">ReleaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.launchTemplate"></a>

```go
func LaunchTemplate() EksNodeGroupLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference">EksNodeGroupLaunchTemplateOutputReference</a>

---

##### `RemoteAccess`<sup>Required</sup> <a name="RemoteAccess" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.remoteAccess"></a>

```go
func RemoteAccess() EksNodeGroupRemoteAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference">EksNodeGroupRemoteAccessOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.resources"></a>

```go
func Resources() EksNodeGroupResourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList">EksNodeGroupResourcesList</a>

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.scalingConfig"></a>

```go
func ScalingConfig() EksNodeGroupScalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference">EksNodeGroupScalingConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Taint`<sup>Required</sup> <a name="Taint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.taint"></a>

```go
func Taint() EksNodeGroupTaintList
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList">EksNodeGroupTaintList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.timeouts"></a>

```go
func Timeouts() EksNodeGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference">EksNodeGroupTimeoutsOutputReference</a>

---

##### `UpdateConfig`<sup>Required</sup> <a name="UpdateConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.updateConfig"></a>

```go
func UpdateConfig() EksNodeGroupUpdateConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference">EksNodeGroupUpdateConfigOutputReference</a>

---

##### `AmiTypeInput`<sup>Optional</sup> <a name="AmiTypeInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.amiTypeInput"></a>

```go
func AmiTypeInput() *string
```

- *Type:* *string

---

##### `CapacityTypeInput`<sup>Optional</sup> <a name="CapacityTypeInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.capacityTypeInput"></a>

```go
func CapacityTypeInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DiskSizeInput`<sup>Optional</sup> <a name="DiskSizeInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.diskSizeInput"></a>

```go
func DiskSizeInput() *f64
```

- *Type:* *f64

---

##### `ForceUpdateVersionInput`<sup>Optional</sup> <a name="ForceUpdateVersionInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forceUpdateVersionInput"></a>

```go
func ForceUpdateVersionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.instanceTypesInput"></a>

```go
func InstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.launchTemplateInput"></a>

```go
func LaunchTemplateInput() EksNodeGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

---

##### `NodeGroupNameInput`<sup>Optional</sup> <a name="NodeGroupNameInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNameInput"></a>

```go
func NodeGroupNameInput() *string
```

- *Type:* *string

---

##### `NodeGroupNamePrefixInput`<sup>Optional</sup> <a name="NodeGroupNamePrefixInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefixInput"></a>

```go
func NodeGroupNamePrefixInput() *string
```

- *Type:* *string

---

##### `NodeRoleArnInput`<sup>Optional</sup> <a name="NodeRoleArnInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeRoleArnInput"></a>

```go
func NodeRoleArnInput() *string
```

- *Type:* *string

---

##### `ReleaseVersionInput`<sup>Optional</sup> <a name="ReleaseVersionInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.releaseVersionInput"></a>

```go
func ReleaseVersionInput() *string
```

- *Type:* *string

---

##### `RemoteAccessInput`<sup>Optional</sup> <a name="RemoteAccessInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.remoteAccessInput"></a>

```go
func RemoteAccessInput() EksNodeGroupRemoteAccess
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

---

##### `ScalingConfigInput`<sup>Optional</sup> <a name="ScalingConfigInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.scalingConfigInput"></a>

```go
func ScalingConfigInput() EksNodeGroupScalingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaintInput`<sup>Optional</sup> <a name="TaintInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.taintInput"></a>

```go
func TaintInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateConfigInput`<sup>Optional</sup> <a name="UpdateConfigInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.updateConfigInput"></a>

```go
func UpdateConfigInput() EksNodeGroupUpdateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AmiType`<sup>Required</sup> <a name="AmiType" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.amiType"></a>

```go
func AmiType() *string
```

- *Type:* *string

---

##### `CapacityType`<sup>Required</sup> <a name="CapacityType" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.capacityType"></a>

```go
func CapacityType() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.diskSize"></a>

```go
func DiskSize() *f64
```

- *Type:* *f64

---

##### `ForceUpdateVersion`<sup>Required</sup> <a name="ForceUpdateVersion" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forceUpdateVersion"></a>

```go
func ForceUpdateVersion() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.instanceTypes"></a>

```go
func InstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeGroupName`<sup>Required</sup> <a name="NodeGroupName" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupName"></a>

```go
func NodeGroupName() *string
```

- *Type:* *string

---

##### `NodeGroupNamePrefix`<sup>Required</sup> <a name="NodeGroupNamePrefix" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefix"></a>

```go
func NodeGroupNamePrefix() *string
```

- *Type:* *string

---

##### `NodeRoleArn`<sup>Required</sup> <a name="NodeRoleArn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeRoleArn"></a>

```go
func NodeRoleArn() *string
```

- *Type:* *string

---

##### `ReleaseVersion`<sup>Required</sup> <a name="ReleaseVersion" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.releaseVersion"></a>

```go
func ReleaseVersion() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EksNodeGroupConfig <a name="EksNodeGroupConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

&eksnodegroup.EksNodeGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	NodeRoleArn: *string,
	ScalingConfig: github.com/cdktf/cdktf-provider-aws-go/aws.eksNodeGroup.EksNodeGroupScalingConfig,
	SubnetIds: *[]*string,
	AmiType: *string,
	CapacityType: *string,
	DiskSize: *f64,
	ForceUpdateVersion: interface{},
	Id: *string,
	InstanceTypes: *[]*string,
	Labels: *map[string]*string,
	LaunchTemplate: github.com/cdktf/cdktf-provider-aws-go/aws.eksNodeGroup.EksNodeGroupLaunchTemplate,
	NodeGroupName: *string,
	NodeGroupNamePrefix: *string,
	ReleaseVersion: *string,
	RemoteAccess: github.com/cdktf/cdktf-provider-aws-go/aws.eksNodeGroup.EksNodeGroupRemoteAccess,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Taint: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.eksNodeGroup.EksNodeGroupTimeouts,
	UpdateConfig: github.com/cdktf/cdktf-provider-aws-go/aws.eksNodeGroup.EksNodeGroupUpdateConfig,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#cluster_name EksNodeGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeRoleArn">NodeRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.amiType">AmiType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ami_type EksNodeGroup#ami_type}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.capacityType">CapacityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#capacity_type EksNodeGroup#capacity_type}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.diskSize">DiskSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#disk_size EksNodeGroup#disk_size}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.forceUpdateVersion">ForceUpdateVersion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#force_update_version EksNodeGroup#force_update_version}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#instance_types EksNodeGroup#instance_types}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#labels EksNodeGroup#labels}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupName">NodeGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name EksNodeGroup#node_group_name}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupNamePrefix">NodeGroupNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.releaseVersion">ReleaseVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#release_version EksNodeGroup#release_version}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.remoteAccess">RemoteAccess</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | remote_access block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags EksNodeGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags_all EksNodeGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.taint">Taint</a></code> | <code>interface{}</code> | taint block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.updateConfig">UpdateConfig</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | update_config block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#cluster_name EksNodeGroup#cluster_name}.

---

##### `NodeRoleArn`<sup>Required</sup> <a name="NodeRoleArn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeRoleArn"></a>

```go
NodeRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}.

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.scalingConfig"></a>

```go
ScalingConfig EksNodeGroupScalingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#scaling_config EksNodeGroup#scaling_config}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}.

---

##### `AmiType`<sup>Optional</sup> <a name="AmiType" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.amiType"></a>

```go
AmiType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ami_type EksNodeGroup#ami_type}.

---

##### `CapacityType`<sup>Optional</sup> <a name="CapacityType" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.capacityType"></a>

```go
CapacityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#capacity_type EksNodeGroup#capacity_type}.

---

##### `DiskSize`<sup>Optional</sup> <a name="DiskSize" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.diskSize"></a>

```go
DiskSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#disk_size EksNodeGroup#disk_size}.

---

##### `ForceUpdateVersion`<sup>Optional</sup> <a name="ForceUpdateVersion" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.forceUpdateVersion"></a>

```go
ForceUpdateVersion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#force_update_version EksNodeGroup#force_update_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceTypes`<sup>Optional</sup> <a name="InstanceTypes" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.instanceTypes"></a>

```go
InstanceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#instance_types EksNodeGroup#instance_types}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#labels EksNodeGroup#labels}.

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.launchTemplate"></a>

```go
LaunchTemplate EksNodeGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#launch_template EksNodeGroup#launch_template}

---

##### `NodeGroupName`<sup>Optional</sup> <a name="NodeGroupName" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupName"></a>

```go
NodeGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name EksNodeGroup#node_group_name}.

---

##### `NodeGroupNamePrefix`<sup>Optional</sup> <a name="NodeGroupNamePrefix" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupNamePrefix"></a>

```go
NodeGroupNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}.

---

##### `ReleaseVersion`<sup>Optional</sup> <a name="ReleaseVersion" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.releaseVersion"></a>

```go
ReleaseVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#release_version EksNodeGroup#release_version}.

---

##### `RemoteAccess`<sup>Optional</sup> <a name="RemoteAccess" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.remoteAccess"></a>

```go
RemoteAccess EksNodeGroupRemoteAccess
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

remote_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#remote_access EksNodeGroup#remote_access}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags EksNodeGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags_all EksNodeGroup#tags_all}.

---

##### `Taint`<sup>Optional</sup> <a name="Taint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.taint"></a>

```go
Taint interface{}
```

- *Type:* interface{}

taint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#taint EksNodeGroup#taint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.timeouts"></a>

```go
Timeouts EksNodeGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#timeouts EksNodeGroup#timeouts}

---

##### `UpdateConfig`<sup>Optional</sup> <a name="UpdateConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.updateConfig"></a>

```go
UpdateConfig EksNodeGroupUpdateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#update_config EksNodeGroup#update_config}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}.

---

### EksNodeGroupLaunchTemplate <a name="EksNodeGroupLaunchTemplate" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

&eksnodegroup.EksNodeGroupLaunchTemplate {
	Version: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#name EksNodeGroup#name}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#name EksNodeGroup#name}.

---

### EksNodeGroupRemoteAccess <a name="EksNodeGroupRemoteAccess" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

&eksnodegroup.EksNodeGroupRemoteAccess {
	Ec2SshKey: *string,
	SourceSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.property.ec2SshKey">Ec2SshKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ec2_ssh_key EksNodeGroup#ec2_ssh_key}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.property.sourceSecurityGroupIds">SourceSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#source_security_group_ids EksNodeGroup#source_security_group_ids}. |

---

##### `Ec2SshKey`<sup>Optional</sup> <a name="Ec2SshKey" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.property.ec2SshKey"></a>

```go
Ec2SshKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ec2_ssh_key EksNodeGroup#ec2_ssh_key}.

---

##### `SourceSecurityGroupIds`<sup>Optional</sup> <a name="SourceSecurityGroupIds" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.property.sourceSecurityGroupIds"></a>

```go
SourceSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#source_security_group_ids EksNodeGroup#source_security_group_ids}.

---

### EksNodeGroupResources <a name="EksNodeGroupResources" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

&eksnodegroup.EksNodeGroupResources {

}
```


### EksNodeGroupResourcesAutoscalingGroups <a name="EksNodeGroupResourcesAutoscalingGroups" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

&eksnodegroup.EksNodeGroupResourcesAutoscalingGroups {

}
```


### EksNodeGroupScalingConfig <a name="EksNodeGroupScalingConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

&eksnodegroup.EksNodeGroupScalingConfig {
	DesiredSize: *f64,
	MaxSize: *f64,
	MinSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.desiredSize">DesiredSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#desired_size EksNodeGroup#desired_size}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.maxSize">MaxSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_size EksNodeGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.minSize">MinSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#min_size EksNodeGroup#min_size}. |

---

##### `DesiredSize`<sup>Required</sup> <a name="DesiredSize" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.desiredSize"></a>

```go
DesiredSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#desired_size EksNodeGroup#desired_size}.

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.maxSize"></a>

```go
MaxSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_size EksNodeGroup#max_size}.

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.minSize"></a>

```go
MinSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#min_size EksNodeGroup#min_size}.

---

### EksNodeGroupTaint <a name="EksNodeGroupTaint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

&eksnodegroup.EksNodeGroupTaint {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#effect EksNodeGroup#effect}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#key EksNodeGroup#key}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#value EksNodeGroup#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#effect EksNodeGroup#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#key EksNodeGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#value EksNodeGroup#value}.

---

### EksNodeGroupTimeouts <a name="EksNodeGroupTimeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

&eksnodegroup.EksNodeGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#create EksNodeGroup#create}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#delete EksNodeGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#update EksNodeGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#create EksNodeGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#delete EksNodeGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#update EksNodeGroup#update}.

---

### EksNodeGroupUpdateConfig <a name="EksNodeGroupUpdateConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

&eksnodegroup.EksNodeGroupUpdateConfig {
	MaxUnavailable: *f64,
	MaxUnavailablePercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailable">MaxUnavailable</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable EksNodeGroup#max_unavailable}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailablePercentage">MaxUnavailablePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}. |

---

##### `MaxUnavailable`<sup>Optional</sup> <a name="MaxUnavailable" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailable"></a>

```go
MaxUnavailable *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable EksNodeGroup#max_unavailable}.

---

##### `MaxUnavailablePercentage`<sup>Optional</sup> <a name="MaxUnavailablePercentage" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailablePercentage"></a>

```go
MaxUnavailablePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksNodeGroupLaunchTemplateOutputReference <a name="EksNodeGroupLaunchTemplateOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksNodeGroupLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() EksNodeGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

---


### EksNodeGroupRemoteAccessOutputReference <a name="EksNodeGroupRemoteAccessOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupRemoteAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksNodeGroupRemoteAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetEc2SshKey">ResetEc2SshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetSourceSecurityGroupIds">ResetSourceSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEc2SshKey` <a name="ResetEc2SshKey" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetEc2SshKey"></a>

```go
func ResetEc2SshKey()
```

##### `ResetSourceSecurityGroupIds` <a name="ResetSourceSecurityGroupIds" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetSourceSecurityGroupIds"></a>

```go
func ResetSourceSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKeyInput">Ec2SshKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIdsInput">SourceSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKey">Ec2SshKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIds">SourceSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ec2SshKeyInput`<sup>Optional</sup> <a name="Ec2SshKeyInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKeyInput"></a>

```go
func Ec2SshKeyInput() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupIdsInput`<sup>Optional</sup> <a name="SourceSecurityGroupIdsInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIdsInput"></a>

```go
func SourceSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ec2SshKey`<sup>Required</sup> <a name="Ec2SshKey" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKey"></a>

```go
func Ec2SshKey() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupIds`<sup>Required</sup> <a name="SourceSecurityGroupIds" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIds"></a>

```go
func SourceSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() EksNodeGroupRemoteAccess
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

---


### EksNodeGroupResourcesAutoscalingGroupsList <a name="EksNodeGroupResourcesAutoscalingGroupsList" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupResourcesAutoscalingGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EksNodeGroupResourcesAutoscalingGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.get"></a>

```go
func Get(index *f64) EksNodeGroupResourcesAutoscalingGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EksNodeGroupResourcesAutoscalingGroupsOutputReference <a name="EksNodeGroupResourcesAutoscalingGroupsOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupResourcesAutoscalingGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EksNodeGroupResourcesAutoscalingGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups">EksNodeGroupResourcesAutoscalingGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() EksNodeGroupResourcesAutoscalingGroups
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups">EksNodeGroupResourcesAutoscalingGroups</a>

---


### EksNodeGroupResourcesList <a name="EksNodeGroupResourcesList" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EksNodeGroupResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.get"></a>

```go
func Get(index *f64) EksNodeGroupResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EksNodeGroupResourcesOutputReference <a name="EksNodeGroupResourcesOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EksNodeGroupResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.autoscalingGroups">AutoscalingGroups</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList">EksNodeGroupResourcesAutoscalingGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.remoteAccessSecurityGroupId">RemoteAccessSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResources">EksNodeGroupResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingGroups`<sup>Required</sup> <a name="AutoscalingGroups" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.autoscalingGroups"></a>

```go
func AutoscalingGroups() EksNodeGroupResourcesAutoscalingGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList">EksNodeGroupResourcesAutoscalingGroupsList</a>

---

##### `RemoteAccessSecurityGroupId`<sup>Required</sup> <a name="RemoteAccessSecurityGroupId" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.remoteAccessSecurityGroupId"></a>

```go
func RemoteAccessSecurityGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() EksNodeGroupResources
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResources">EksNodeGroupResources</a>

---


### EksNodeGroupScalingConfigOutputReference <a name="EksNodeGroupScalingConfigOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksNodeGroupScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSizeInput">DesiredSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSizeInput">MaxSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSizeInput">MinSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSize">DesiredSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSize">MaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSize">MinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredSizeInput`<sup>Optional</sup> <a name="DesiredSizeInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSizeInput"></a>

```go
func DesiredSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSizeInput"></a>

```go
func MaxSizeInput() *f64
```

- *Type:* *f64

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSizeInput"></a>

```go
func MinSizeInput() *f64
```

- *Type:* *f64

---

##### `DesiredSize`<sup>Required</sup> <a name="DesiredSize" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSize"></a>

```go
func DesiredSize() *f64
```

- *Type:* *f64

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSize"></a>

```go
func MaxSize() *f64
```

- *Type:* *f64

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSize"></a>

```go
func MinSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EksNodeGroupScalingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

---


### EksNodeGroupTaintList <a name="EksNodeGroupTaintList" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupTaintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EksNodeGroupTaintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.get"></a>

```go
func Get(index *f64) EksNodeGroupTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksNodeGroupTaintOutputReference <a name="EksNodeGroupTaintOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupTaintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EksNodeGroupTaintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksNodeGroupTimeoutsOutputReference <a name="EksNodeGroupTimeoutsOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksNodeGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksNodeGroupUpdateConfigOutputReference <a name="EksNodeGroupUpdateConfigOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksnodegroup"

eksnodegroup.NewEksNodeGroupUpdateConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksNodeGroupUpdateConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailable">ResetMaxUnavailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailablePercentage">ResetMaxUnavailablePercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxUnavailable` <a name="ResetMaxUnavailable" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailable"></a>

```go
func ResetMaxUnavailable()
```

##### `ResetMaxUnavailablePercentage` <a name="ResetMaxUnavailablePercentage" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailablePercentage"></a>

```go
func ResetMaxUnavailablePercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailableInput">MaxUnavailableInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentageInput">MaxUnavailablePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailable">MaxUnavailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentage">MaxUnavailablePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxUnavailableInput`<sup>Optional</sup> <a name="MaxUnavailableInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailableInput"></a>

```go
func MaxUnavailableInput() *f64
```

- *Type:* *f64

---

##### `MaxUnavailablePercentageInput`<sup>Optional</sup> <a name="MaxUnavailablePercentageInput" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentageInput"></a>

```go
func MaxUnavailablePercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxUnavailable`<sup>Required</sup> <a name="MaxUnavailable" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailable"></a>

```go
func MaxUnavailable() *f64
```

- *Type:* *f64

---

##### `MaxUnavailablePercentage`<sup>Required</sup> <a name="MaxUnavailablePercentage" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentage"></a>

```go
func MaxUnavailablePercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EksNodeGroupUpdateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

---



