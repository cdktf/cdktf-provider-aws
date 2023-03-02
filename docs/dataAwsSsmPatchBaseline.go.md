# `dataAwsSsmPatchBaseline` Submodule <a name="`dataAwsSsmPatchBaseline` Submodule" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmPatchBaseline <a name="DataAwsSsmPatchBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline aws_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.NewDataAwsSsmPatchBaseline(scope Construct, id *string, config DataAwsSsmPatchBaselineConfig) DataAwsSsmPatchBaseline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig">DataAwsSsmPatchBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig">DataAwsSsmPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetDefaultBaseline">ResetDefaultBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDefaultBaseline` <a name="ResetDefaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetDefaultBaseline"></a>

```go
func ResetDefaultBaseline()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetId"></a>

```go
func ResetId()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOperatingSystem"></a>

```go
func ResetOperatingSystem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.DataAwsSsmPatchBaseline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.DataAwsSsmPatchBaseline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.DataAwsSsmPatchBaseline_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvalRule">ApprovalRule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList">DataAwsSsmPatchBaselineApprovalRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatches">ApprovedPatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesComplianceLevel">ApprovedPatchesComplianceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesEnableNonSecurity">ApprovedPatchesEnableNonSecurity</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.globalFilter">GlobalFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList">DataAwsSsmPatchBaselineGlobalFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatches">RejectedPatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatchesAction">RejectedPatchesAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList">DataAwsSsmPatchBaselineSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaselineInput">DefaultBaselineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaseline">DefaultBaseline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApprovalRule`<sup>Required</sup> <a name="ApprovalRule" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvalRule"></a>

```go
func ApprovalRule() DataAwsSsmPatchBaselineApprovalRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList">DataAwsSsmPatchBaselineApprovalRuleList</a>

---

##### `ApprovedPatches`<sup>Required</sup> <a name="ApprovedPatches" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatches"></a>

```go
func ApprovedPatches() *[]*string
```

- *Type:* *[]*string

---

##### `ApprovedPatchesComplianceLevel`<sup>Required</sup> <a name="ApprovedPatchesComplianceLevel" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```go
func ApprovedPatchesComplianceLevel() *string
```

- *Type:* *string

---

##### `ApprovedPatchesEnableNonSecurity`<sup>Required</sup> <a name="ApprovedPatchesEnableNonSecurity" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```go
func ApprovedPatchesEnableNonSecurity() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GlobalFilter`<sup>Required</sup> <a name="GlobalFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.globalFilter"></a>

```go
func GlobalFilter() DataAwsSsmPatchBaselineGlobalFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList">DataAwsSsmPatchBaselineGlobalFilterList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RejectedPatches`<sup>Required</sup> <a name="RejectedPatches" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatches"></a>

```go
func RejectedPatches() *[]*string
```

- *Type:* *[]*string

---

##### `RejectedPatchesAction`<sup>Required</sup> <a name="RejectedPatchesAction" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatchesAction"></a>

```go
func RejectedPatchesAction() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.source"></a>

```go
func Source() DataAwsSsmPatchBaselineSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList">DataAwsSsmPatchBaselineSourceList</a>

---

##### `DefaultBaselineInput`<sup>Optional</sup> <a name="DefaultBaselineInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaselineInput"></a>

```go
func DefaultBaselineInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `DefaultBaseline`<sup>Required</sup> <a name="DefaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaseline"></a>

```go
func DefaultBaseline() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmPatchBaselineApprovalRule <a name="DataAwsSsmPatchBaselineApprovalRule" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

&dataawsssmpatchbaseline.DataAwsSsmPatchBaselineApprovalRule {

}
```


### DataAwsSsmPatchBaselineApprovalRulePatchFilter <a name="DataAwsSsmPatchBaselineApprovalRulePatchFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

&dataawsssmpatchbaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter {

}
```


### DataAwsSsmPatchBaselineConfig <a name="DataAwsSsmPatchBaselineConfig" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

&dataawsssmpatchbaseline.DataAwsSsmPatchBaselineConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Owner: *string,
	DefaultBaseline: interface{},
	Id: *string,
	NamePrefix: *string,
	OperatingSystem: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.defaultBaseline">DefaultBaseline</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}.

---

##### `DefaultBaseline`<sup>Optional</sup> <a name="DefaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.defaultBaseline"></a>

```go
DefaultBaseline interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}.

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.operatingSystem"></a>

```go
OperatingSystem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}.

---

### DataAwsSsmPatchBaselineGlobalFilter <a name="DataAwsSsmPatchBaselineGlobalFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

&dataawsssmpatchbaseline.DataAwsSsmPatchBaselineGlobalFilter {

}
```


### DataAwsSsmPatchBaselineSource <a name="DataAwsSsmPatchBaselineSource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

&dataawsssmpatchbaseline.DataAwsSsmPatchBaselineSource {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmPatchBaselineApprovalRuleList <a name="DataAwsSsmPatchBaselineApprovalRuleList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.NewDataAwsSsmPatchBaselineApprovalRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmPatchBaselineApprovalRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.get"></a>

```go
func Get(index *f64) DataAwsSsmPatchBaselineApprovalRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmPatchBaselineApprovalRuleOutputReference <a name="DataAwsSsmPatchBaselineApprovalRuleOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.NewDataAwsSsmPatchBaselineApprovalRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmPatchBaselineApprovalRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays">ApproveAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate">ApproveUntilDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel">ComplianceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity">EnableNonSecurity</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.patchFilter">PatchFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList">DataAwsSsmPatchBaselineApprovalRulePatchFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule">DataAwsSsmPatchBaselineApprovalRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproveAfterDays`<sup>Required</sup> <a name="ApproveAfterDays" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays"></a>

```go
func ApproveAfterDays() *f64
```

- *Type:* *f64

---

##### `ApproveUntilDate`<sup>Required</sup> <a name="ApproveUntilDate" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate"></a>

```go
func ApproveUntilDate() *string
```

- *Type:* *string

---

##### `ComplianceLevel`<sup>Required</sup> <a name="ComplianceLevel" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel"></a>

```go
func ComplianceLevel() *string
```

- *Type:* *string

---

##### `EnableNonSecurity`<sup>Required</sup> <a name="EnableNonSecurity" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity"></a>

```go
func EnableNonSecurity() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PatchFilter`<sup>Required</sup> <a name="PatchFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.patchFilter"></a>

```go
func PatchFilter() DataAwsSsmPatchBaselineApprovalRulePatchFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList">DataAwsSsmPatchBaselineApprovalRulePatchFilterList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmPatchBaselineApprovalRule
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule">DataAwsSsmPatchBaselineApprovalRule</a>

---


### DataAwsSsmPatchBaselineApprovalRulePatchFilterList <a name="DataAwsSsmPatchBaselineApprovalRulePatchFilterList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.NewDataAwsSsmPatchBaselineApprovalRulePatchFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmPatchBaselineApprovalRulePatchFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.get"></a>

```go
func Get(index *f64) DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference <a name="DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.NewDataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter">DataAwsSsmPatchBaselineApprovalRulePatchFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmPatchBaselineApprovalRulePatchFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter">DataAwsSsmPatchBaselineApprovalRulePatchFilter</a>

---


### DataAwsSsmPatchBaselineGlobalFilterList <a name="DataAwsSsmPatchBaselineGlobalFilterList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.NewDataAwsSsmPatchBaselineGlobalFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmPatchBaselineGlobalFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.get"></a>

```go
func Get(index *f64) DataAwsSsmPatchBaselineGlobalFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmPatchBaselineGlobalFilterOutputReference <a name="DataAwsSsmPatchBaselineGlobalFilterOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.NewDataAwsSsmPatchBaselineGlobalFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmPatchBaselineGlobalFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter">DataAwsSsmPatchBaselineGlobalFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmPatchBaselineGlobalFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter">DataAwsSsmPatchBaselineGlobalFilter</a>

---


### DataAwsSsmPatchBaselineSourceList <a name="DataAwsSsmPatchBaselineSourceList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.NewDataAwsSsmPatchBaselineSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmPatchBaselineSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.get"></a>

```go
func Get(index *f64) DataAwsSsmPatchBaselineSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmPatchBaselineSourceOutputReference <a name="DataAwsSsmPatchBaselineSourceOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsssmpatchbaseline"

dataawsssmpatchbaseline.NewDataAwsSsmPatchBaselineSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmPatchBaselineSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.products">Products</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource">DataAwsSsmPatchBaselineSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.products"></a>

```go
func Products() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmPatchBaselineSource
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource">DataAwsSsmPatchBaselineSource</a>

---



