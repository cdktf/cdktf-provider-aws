# `dataAwsSsmPatchBaselines` Submodule <a name="`dataAwsSsmPatchBaselines` Submodule" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmPatchBaselines <a name="DataAwsSsmPatchBaselines" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines aws_ssm_patch_baselines}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

dataawsssmpatchbaselines.NewDataAwsSsmPatchBaselines(scope Construct, id *string, config DataAwsSsmPatchBaselinesConfig) DataAwsSsmPatchBaselines
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig">DataAwsSsmPatchBaselinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig">DataAwsSsmPatchBaselinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetDefaultBaselines">ResetDefaultBaselines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultBaselines` <a name="ResetDefaultBaselines" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetDefaultBaselines"></a>

```go
func ResetDefaultBaselines()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsmPatchBaselines resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

dataawsssmpatchbaselines.DataAwsSsmPatchBaselines_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

dataawsssmpatchbaselines.DataAwsSsmPatchBaselines_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

dataawsssmpatchbaselines.DataAwsSsmPatchBaselines_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

dataawsssmpatchbaselines.DataAwsSsmPatchBaselines_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsSsmPatchBaselines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSsmPatchBaselines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSsmPatchBaselines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmPatchBaselines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.baselineIdentities">BaselineIdentities</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList">DataAwsSsmPatchBaselinesBaselineIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList">DataAwsSsmPatchBaselinesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselinesInput">DefaultBaselinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselines">DefaultBaselines</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BaselineIdentities`<sup>Required</sup> <a name="BaselineIdentities" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.baselineIdentities"></a>

```go
func BaselineIdentities() DataAwsSsmPatchBaselinesBaselineIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList">DataAwsSsmPatchBaselinesBaselineIdentitiesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filter"></a>

```go
func Filter() DataAwsSsmPatchBaselinesFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList">DataAwsSsmPatchBaselinesFilterList</a>

---

##### `DefaultBaselinesInput`<sup>Optional</sup> <a name="DefaultBaselinesInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselinesInput"></a>

```go
func DefaultBaselinesInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `DefaultBaselines`<sup>Required</sup> <a name="DefaultBaselines" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselines"></a>

```go
func DefaultBaselines() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmPatchBaselinesBaselineIdentities <a name="DataAwsSsmPatchBaselinesBaselineIdentities" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

&dataawsssmpatchbaselines.DataAwsSsmPatchBaselinesBaselineIdentities {

}
```


### DataAwsSsmPatchBaselinesConfig <a name="DataAwsSsmPatchBaselinesConfig" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

&dataawsssmpatchbaselines.DataAwsSsmPatchBaselinesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultBaselines: interface{},
	Filter: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.defaultBaselines">DefaultBaselines</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultBaselines`<sup>Optional</sup> <a name="DefaultBaselines" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.defaultBaselines"></a>

```go
DefaultBaselines interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines#filter DataAwsSsmPatchBaselines#filter}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines#region DataAwsSsmPatchBaselines#region}

---

### DataAwsSsmPatchBaselinesFilter <a name="DataAwsSsmPatchBaselinesFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

&dataawsssmpatchbaselines.DataAwsSsmPatchBaselinesFilter {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines#key DataAwsSsmPatchBaselines#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines#values DataAwsSsmPatchBaselines#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines#key DataAwsSsmPatchBaselines#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ssm_patch_baselines#values DataAwsSsmPatchBaselines#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmPatchBaselinesBaselineIdentitiesList <a name="DataAwsSsmPatchBaselinesBaselineIdentitiesList" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

dataawsssmpatchbaselines.NewDataAwsSsmPatchBaselinesBaselineIdentitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmPatchBaselinesBaselineIdentitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.get"></a>

```go
func Get(index *f64) DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference <a name="DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

dataawsssmpatchbaselines.NewDataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineDescription">BaselineDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineId">BaselineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineName">BaselineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.defaultBaseline">DefaultBaseline</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities">DataAwsSsmPatchBaselinesBaselineIdentities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaselineDescription`<sup>Required</sup> <a name="BaselineDescription" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineDescription"></a>

```go
func BaselineDescription() *string
```

- *Type:* *string

---

##### `BaselineId`<sup>Required</sup> <a name="BaselineId" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineId"></a>

```go
func BaselineId() *string
```

- *Type:* *string

---

##### `BaselineName`<sup>Required</sup> <a name="BaselineName" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineName"></a>

```go
func BaselineName() *string
```

- *Type:* *string

---

##### `DefaultBaseline`<sup>Required</sup> <a name="DefaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.defaultBaseline"></a>

```go
func DefaultBaseline() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSsmPatchBaselinesBaselineIdentities
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities">DataAwsSsmPatchBaselinesBaselineIdentities</a>

---


### DataAwsSsmPatchBaselinesFilterList <a name="DataAwsSsmPatchBaselinesFilterList" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

dataawsssmpatchbaselines.NewDataAwsSsmPatchBaselinesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSsmPatchBaselinesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.get"></a>

```go
func Get(index *f64) DataAwsSsmPatchBaselinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsSsmPatchBaselinesFilterOutputReference <a name="DataAwsSsmPatchBaselinesFilterOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsssmpatchbaselines"

dataawsssmpatchbaselines.NewDataAwsSsmPatchBaselinesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSsmPatchBaselinesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



