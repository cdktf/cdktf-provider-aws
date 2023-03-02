# `dataAwsLakeformationPermissions` Submodule <a name="`dataAwsLakeformationPermissions` Submodule" id="@cdktf/provider-aws.dataAwsLakeformationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLakeformationPermissions <a name="DataAwsLakeformationPermissions" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions aws_lakeformation_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.NewDataAwsLakeformationPermissions(scope Construct, id *string, config DataAwsLakeformationPermissionsConfig) DataAwsLakeformationPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig">DataAwsLakeformationPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig">DataAwsLakeformationPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation">PutDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag">PutLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy">PutLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns">PutTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogResource">ResetCatalogResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDataLocation">ResetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTag">ResetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTagPolicy">ResetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTableWithColumns">ResetTableWithColumns</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase"></a>

```go
func PutDatabase(value DataAwsLakeformationPermissionsDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---

##### `PutDataLocation` <a name="PutDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation"></a>

```go
func PutDataLocation(value DataAwsLakeformationPermissionsDataLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---

##### `PutLfTag` <a name="PutLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag"></a>

```go
func PutLfTag(value DataAwsLakeformationPermissionsLfTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---

##### `PutLfTagPolicy` <a name="PutLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy"></a>

```go
func PutLfTagPolicy(value DataAwsLakeformationPermissionsLfTagPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable"></a>

```go
func PutTable(value DataAwsLakeformationPermissionsTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---

##### `PutTableWithColumns` <a name="PutTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns"></a>

```go
func PutTableWithColumns(value DataAwsLakeformationPermissionsTableWithColumns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetCatalogResource` <a name="ResetCatalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogResource"></a>

```go
func ResetCatalogResource()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDataLocation` <a name="ResetDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDataLocation"></a>

```go
func ResetDataLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetId"></a>

```go
func ResetId()
```

##### `ResetLfTag` <a name="ResetLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTag"></a>

```go
func ResetLfTag()
```

##### `ResetLfTagPolicy` <a name="ResetLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTagPolicy"></a>

```go
func ResetLfTagPolicy()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTable"></a>

```go
func ResetTable()
```

##### `ResetTableWithColumns` <a name="ResetTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTableWithColumns"></a>

```go
func ResetTableWithColumns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.DataAwsLakeformationPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.DataAwsLakeformationPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.DataAwsLakeformationPermissions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference">DataAwsLakeformationPermissionsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference">DataAwsLakeformationPermissionsDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTag">LfTag</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference">DataAwsLakeformationPermissionsLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference">DataAwsLakeformationPermissionsLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference">DataAwsLakeformationPermissionsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference">DataAwsLakeformationPermissionsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResourceInput">CatalogResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocationInput">DataLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagInput">LfTagInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicyInput">LfTagPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableInput">TableInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumnsInput">TableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResource">CatalogResource</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.database"></a>

```go
func Database() DataAwsLakeformationPermissionsDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference">DataAwsLakeformationPermissionsDatabaseOutputReference</a>

---

##### `DataLocation`<sup>Required</sup> <a name="DataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocation"></a>

```go
func DataLocation() DataAwsLakeformationPermissionsDataLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference">DataAwsLakeformationPermissionsDataLocationOutputReference</a>

---

##### `LfTag`<sup>Required</sup> <a name="LfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTag"></a>

```go
func LfTag() DataAwsLakeformationPermissionsLfTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference">DataAwsLakeformationPermissionsLfTagOutputReference</a>

---

##### `LfTagPolicy`<sup>Required</sup> <a name="LfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicy"></a>

```go
func LfTagPolicy() DataAwsLakeformationPermissionsLfTagPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference">DataAwsLakeformationPermissionsLfTagPolicyOutputReference</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionsWithGrantOption`<sup>Required</sup> <a name="PermissionsWithGrantOption" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissionsWithGrantOption"></a>

```go
func PermissionsWithGrantOption() *[]*string
```

- *Type:* *[]*string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.table"></a>

```go
func Table() DataAwsLakeformationPermissionsTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference">DataAwsLakeformationPermissionsTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumns"></a>

```go
func TableWithColumns() DataAwsLakeformationPermissionsTableWithColumnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference">DataAwsLakeformationPermissionsTableWithColumnsOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `CatalogResourceInput`<sup>Optional</sup> <a name="CatalogResourceInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResourceInput"></a>

```go
func CatalogResourceInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.databaseInput"></a>

```go
func DatabaseInput() DataAwsLakeformationPermissionsDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---

##### `DataLocationInput`<sup>Optional</sup> <a name="DataLocationInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocationInput"></a>

```go
func DataLocationInput() DataAwsLakeformationPermissionsDataLocation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LfTagInput`<sup>Optional</sup> <a name="LfTagInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagInput"></a>

```go
func LfTagInput() DataAwsLakeformationPermissionsLfTag
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---

##### `LfTagPolicyInput`<sup>Optional</sup> <a name="LfTagPolicyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicyInput"></a>

```go
func LfTagPolicyInput() DataAwsLakeformationPermissionsLfTagPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableInput"></a>

```go
func TableInput() DataAwsLakeformationPermissionsTable
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---

##### `TableWithColumnsInput`<sup>Optional</sup> <a name="TableWithColumnsInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumnsInput"></a>

```go
func TableWithColumnsInput() DataAwsLakeformationPermissionsTableWithColumns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `CatalogResource`<sup>Required</sup> <a name="CatalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResource"></a>

```go
func CatalogResource() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLakeformationPermissionsConfig <a name="DataAwsLakeformationPermissionsConfig" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

&dataawslakeformationpermissions.DataAwsLakeformationPermissionsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Principal: *string,
	CatalogId: *string,
	CatalogResource: interface{},
	Database: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase,
	DataLocation: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation,
	Id: *string,
	LfTag: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag,
	LfTagPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy,
	Table: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable,
	TableWithColumns: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogResource">CatalogResource</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTag">LfTag</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | table_with_columns block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `CatalogResource`<sup>Optional</sup> <a name="CatalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogResource"></a>

```go
CatalogResource interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.database"></a>

```go
Database DataAwsLakeformationPermissionsDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database DataAwsLakeformationPermissions#database}

---

##### `DataLocation`<sup>Optional</sup> <a name="DataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dataLocation"></a>

```go
DataLocation DataAwsLakeformationPermissionsDataLocation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

data_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#data_location DataAwsLakeformationPermissions#data_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LfTag`<sup>Optional</sup> <a name="LfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTag"></a>

```go
LfTag DataAwsLakeformationPermissionsLfTag
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag DataAwsLakeformationPermissions#lf_tag}

---

##### `LfTagPolicy`<sup>Optional</sup> <a name="LfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTagPolicy"></a>

```go
LfTagPolicy DataAwsLakeformationPermissionsLfTagPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

lf_tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag_policy DataAwsLakeformationPermissions#lf_tag_policy}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.table"></a>

```go
Table DataAwsLakeformationPermissionsTable
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table DataAwsLakeformationPermissions#table}

---

##### `TableWithColumns`<sup>Optional</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.tableWithColumns"></a>

```go
TableWithColumns DataAwsLakeformationPermissionsTableWithColumns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table_with_columns DataAwsLakeformationPermissions#table_with_columns}

---

### DataAwsLakeformationPermissionsDatabase <a name="DataAwsLakeformationPermissionsDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

&dataawslakeformationpermissions.DataAwsLakeformationPermissionsDatabase {
	Name: *string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsDataLocation <a name="DataAwsLakeformationPermissionsDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

&dataawslakeformationpermissions.DataAwsLakeformationPermissionsDataLocation {
	Arn: *string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTag <a name="DataAwsLakeformationPermissionsLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

&dataawslakeformationpermissions.DataAwsLakeformationPermissionsLfTag {
	Key: *string,
	Values: *[]*string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTagPolicy <a name="DataAwsLakeformationPermissionsLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

&dataawslakeformationpermissions.DataAwsLakeformationPermissionsLfTagPolicy {
	Expression: interface{},
	ResourceType: *string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.expression">Expression</a></code> | <code>interface{}</code> | expression block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#resource_type DataAwsLakeformationPermissions#resource_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.expression"></a>

```go
Expression interface{}
```

- *Type:* interface{}

expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#expression DataAwsLakeformationPermissions#expression}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#resource_type DataAwsLakeformationPermissions#resource_type}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTagPolicyExpression <a name="DataAwsLakeformationPermissionsLfTagPolicyExpression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

&dataawslakeformationpermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}.

---

### DataAwsLakeformationPermissionsTable <a name="DataAwsLakeformationPermissionsTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

&dataawslakeformationpermissions.DataAwsLakeformationPermissionsTable {
	DatabaseName: *string,
	CatalogId: *string,
	Name: *string,
	Wildcard: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.wildcard">Wildcard</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.wildcard"></a>

```go
Wildcard interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}.

---

### DataAwsLakeformationPermissionsTableWithColumns <a name="DataAwsLakeformationPermissionsTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

&dataawslakeformationpermissions.DataAwsLakeformationPermissionsTableWithColumns {
	DatabaseName: *string,
	Name: *string,
	CatalogId: *string,
	ColumnNames: *[]*string,
	ExcludedColumnNames: *[]*string,
	Wildcard: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.wildcard">Wildcard</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}.

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.excludedColumnNames"></a>

```go
ExcludedColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.wildcard"></a>

```go
Wildcard interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLakeformationPermissionsDatabaseOutputReference <a name="DataAwsLakeformationPermissionsDatabaseOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.NewDataAwsLakeformationPermissionsDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsLakeformationPermissionsDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLakeformationPermissionsDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---


### DataAwsLakeformationPermissionsDataLocationOutputReference <a name="DataAwsLakeformationPermissionsDataLocationOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.NewDataAwsLakeformationPermissionsDataLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsLakeformationPermissionsDataLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLakeformationPermissionsDataLocation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---


### DataAwsLakeformationPermissionsLfTagOutputReference <a name="DataAwsLakeformationPermissionsLfTagOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.NewDataAwsLakeformationPermissionsLfTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsLakeformationPermissionsLfTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLakeformationPermissionsLfTag
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---


### DataAwsLakeformationPermissionsLfTagPolicyExpressionList <a name="DataAwsLakeformationPermissionsLfTagPolicyExpressionList" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.NewDataAwsLakeformationPermissionsLfTagPolicyExpressionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLakeformationPermissionsLfTagPolicyExpressionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get"></a>

```go
func Get(index *f64) DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference <a name="DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.NewDataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsLakeformationPermissionsLfTagPolicyOutputReference <a name="DataAwsLakeformationPermissionsLfTagPolicyOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.NewDataAwsLakeformationPermissionsLfTagPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsLakeformationPermissionsLfTagPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression"></a>

```go
func PutExpression(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList">DataAwsLakeformationPermissionsLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expression"></a>

```go
func Expression() DataAwsLakeformationPermissionsLfTagPolicyExpressionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList">DataAwsLakeformationPermissionsLfTagPolicyExpressionList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLakeformationPermissionsLfTagPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---


### DataAwsLakeformationPermissionsTableOutputReference <a name="DataAwsLakeformationPermissionsTableOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.NewDataAwsLakeformationPermissionsTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsLakeformationPermissionsTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetWildcard"></a>

```go
func ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcard">Wildcard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcardInput"></a>

```go
func WildcardInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcard"></a>

```go
func Wildcard() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLakeformationPermissionsTable
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---


### DataAwsLakeformationPermissionsTableWithColumnsOutputReference <a name="DataAwsLakeformationPermissionsTableWithColumnsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationpermissions"

dataawslakeformationpermissions.NewDataAwsLakeformationPermissionsTableWithColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsLakeformationPermissionsTableWithColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames"></a>

```go
func ResetColumnNames()
```

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```go
func ResetExcludedColumnNames()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetWildcard"></a>

```go
func ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcard">Wildcard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```go
func ExcludedColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput"></a>

```go
func WildcardInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```go
func ExcludedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcard"></a>

```go
func Wildcard() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLakeformationPermissionsTableWithColumns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---



