# `dataAwsGuarddutyFindingIds` Submodule <a name="`dataAwsGuarddutyFindingIds` Submodule" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGuarddutyFindingIds <a name="DataAwsGuarddutyFindingIds" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/data-sources/guardduty_finding_ids aws_guardduty_finding_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsguarddutyfindingids"

dataawsguarddutyfindingids.NewDataAwsGuarddutyFindingIds(scope Construct, id *string, config DataAwsGuarddutyFindingIdsConfig) DataAwsGuarddutyFindingIds
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig">DataAwsGuarddutyFindingIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig">DataAwsGuarddutyFindingIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsGuarddutyFindingIds resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsguarddutyfindingids"

dataawsguarddutyfindingids.DataAwsGuarddutyFindingIds_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsguarddutyfindingids"

dataawsguarddutyfindingids.DataAwsGuarddutyFindingIds_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsguarddutyfindingids"

dataawsguarddutyfindingids.DataAwsGuarddutyFindingIds_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsguarddutyfindingids"

dataawsguarddutyfindingids.DataAwsGuarddutyFindingIds_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsGuarddutyFindingIds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsGuarddutyFindingIds to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsGuarddutyFindingIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/data-sources/guardduty_finding_ids#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsGuarddutyFindingIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.findingIds">FindingIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.hasFindings">HasFindings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorIdInput">DetectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorId">DetectorId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `FindingIds`<sup>Required</sup> <a name="FindingIds" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.findingIds"></a>

```go
func FindingIds() *[]*string
```

- *Type:* *[]*string

---

##### `HasFindings`<sup>Required</sup> <a name="HasFindings" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.hasFindings"></a>

```go
func HasFindings() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorIdInput"></a>

```go
func DetectorIdInput() *string
```

- *Type:* *string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorId"></a>

```go
func DetectorId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGuarddutyFindingIdsConfig <a name="DataAwsGuarddutyFindingIdsConfig" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsguarddutyfindingids"

&dataawsguarddutyfindingids.DataAwsGuarddutyFindingIdsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DetectorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.detectorId">DetectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/data-sources/guardduty_finding_ids#detector_id DataAwsGuarddutyFindingIds#detector_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.detectorId"></a>

```go
DetectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/data-sources/guardduty_finding_ids#detector_id DataAwsGuarddutyFindingIds#detector_id}.

---



