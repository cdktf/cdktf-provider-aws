# `lakeformationPermissions` Submodule <a name="`lakeformationPermissions` Submodule" id="@cdktf/provider-aws.lakeformationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationPermissions <a name="LakeformationPermissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions aws_lakeformation_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.NewLakeformationPermissions(scope Construct, id *string, config LakeformationPermissionsConfig) LakeformationPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig">LakeformationPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig">LakeformationPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDataLocation">PutDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTag">PutLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTagPolicy">PutLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTableWithColumns">PutTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogResource">ResetCatalogResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDataLocation">ResetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTag">ResetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTagPolicy">ResetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetPermissionsWithGrantOption">ResetPermissionsWithGrantOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTableWithColumns">ResetTableWithColumns</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDatabase"></a>

```go
func PutDatabase(value LakeformationPermissionsDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

---

##### `PutDataLocation` <a name="PutDataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDataLocation"></a>

```go
func PutDataLocation(value LakeformationPermissionsDataLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

---

##### `PutLfTag` <a name="PutLfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTag"></a>

```go
func PutLfTag(value LakeformationPermissionsLfTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

---

##### `PutLfTagPolicy` <a name="PutLfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTagPolicy"></a>

```go
func PutLfTagPolicy(value LakeformationPermissionsLfTagPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTable"></a>

```go
func PutTable(value LakeformationPermissionsTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

---

##### `PutTableWithColumns` <a name="PutTableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTableWithColumns"></a>

```go
func PutTableWithColumns(value LakeformationPermissionsTableWithColumns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetCatalogResource` <a name="ResetCatalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogResource"></a>

```go
func ResetCatalogResource()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDataLocation` <a name="ResetDataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDataLocation"></a>

```go
func ResetDataLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetId"></a>

```go
func ResetId()
```

##### `ResetLfTag` <a name="ResetLfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTag"></a>

```go
func ResetLfTag()
```

##### `ResetLfTagPolicy` <a name="ResetLfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTagPolicy"></a>

```go
func ResetLfTagPolicy()
```

##### `ResetPermissionsWithGrantOption` <a name="ResetPermissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetPermissionsWithGrantOption"></a>

```go
func ResetPermissionsWithGrantOption()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTable"></a>

```go
func ResetTable()
```

##### `ResetTableWithColumns` <a name="ResetTableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTableWithColumns"></a>

```go
func ResetTableWithColumns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.LakeformationPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.LakeformationPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.LakeformationPermissions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference">LakeformationPermissionsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference">LakeformationPermissionsDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTag">LfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference">LakeformationPermissionsLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference">LakeformationPermissionsLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference">LakeformationPermissionsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference">LakeformationPermissionsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResourceInput">CatalogResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocationInput">DataLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagInput">LfTagInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicyInput">LfTagPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOptionInput">PermissionsWithGrantOptionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableInput">TableInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumnsInput">TableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResource">CatalogResource</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.database"></a>

```go
func Database() LakeformationPermissionsDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference">LakeformationPermissionsDatabaseOutputReference</a>

---

##### `DataLocation`<sup>Required</sup> <a name="DataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocation"></a>

```go
func DataLocation() LakeformationPermissionsDataLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference">LakeformationPermissionsDataLocationOutputReference</a>

---

##### `LfTag`<sup>Required</sup> <a name="LfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTag"></a>

```go
func LfTag() LakeformationPermissionsLfTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference">LakeformationPermissionsLfTagOutputReference</a>

---

##### `LfTagPolicy`<sup>Required</sup> <a name="LfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicy"></a>

```go
func LfTagPolicy() LakeformationPermissionsLfTagPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference">LakeformationPermissionsLfTagPolicyOutputReference</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.table"></a>

```go
func Table() LakeformationPermissionsTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference">LakeformationPermissionsTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumns"></a>

```go
func TableWithColumns() LakeformationPermissionsTableWithColumnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference">LakeformationPermissionsTableWithColumnsOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `CatalogResourceInput`<sup>Optional</sup> <a name="CatalogResourceInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResourceInput"></a>

```go
func CatalogResourceInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.databaseInput"></a>

```go
func DatabaseInput() LakeformationPermissionsDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

---

##### `DataLocationInput`<sup>Optional</sup> <a name="DataLocationInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocationInput"></a>

```go
func DataLocationInput() LakeformationPermissionsDataLocation
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LfTagInput`<sup>Optional</sup> <a name="LfTagInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagInput"></a>

```go
func LfTagInput() LakeformationPermissionsLfTag
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

---

##### `LfTagPolicyInput`<sup>Optional</sup> <a name="LfTagPolicyInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicyInput"></a>

```go
func LfTagPolicyInput() LakeformationPermissionsLfTagPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionsWithGrantOptionInput`<sup>Optional</sup> <a name="PermissionsWithGrantOptionInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOptionInput"></a>

```go
func PermissionsWithGrantOptionInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableInput"></a>

```go
func TableInput() LakeformationPermissionsTable
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

---

##### `TableWithColumnsInput`<sup>Optional</sup> <a name="TableWithColumnsInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumnsInput"></a>

```go
func TableWithColumnsInput() LakeformationPermissionsTableWithColumns
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `CatalogResource`<sup>Required</sup> <a name="CatalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResource"></a>

```go
func CatalogResource() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionsWithGrantOption`<sup>Required</sup> <a name="PermissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOption"></a>

```go
func PermissionsWithGrantOption() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationPermissionsConfig <a name="LakeformationPermissionsConfig" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

&lakeformationpermissions.LakeformationPermissionsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Permissions: *[]*string,
	Principal: *string,
	CatalogId: *string,
	CatalogResource: interface{},
	Database: github.com/cdktf/cdktf-provider-aws-go/aws.lakeformationPermissions.LakeformationPermissionsDatabase,
	DataLocation: github.com/cdktf/cdktf-provider-aws-go/aws.lakeformationPermissions.LakeformationPermissionsDataLocation,
	Id: *string,
	LfTag: github.com/cdktf/cdktf-provider-aws-go/aws.lakeformationPermissions.LakeformationPermissionsLfTag,
	LfTagPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy,
	PermissionsWithGrantOption: *[]*string,
	Table: github.com/cdktf/cdktf-provider-aws-go/aws.lakeformationPermissions.LakeformationPermissionsTable,
	TableWithColumns: github.com/cdktf/cdktf-provider-aws-go/aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissions">Permissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions LakeformationPermissions#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#principal LakeformationPermissions#principal}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogResource">CatalogResource</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#id LakeformationPermissions#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTag">LfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | table_with_columns block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions LakeformationPermissions#permissions}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#principal LakeformationPermissions#principal}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `CatalogResource`<sup>Optional</sup> <a name="CatalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogResource"></a>

```go
CatalogResource interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.database"></a>

```go
Database LakeformationPermissionsDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database LakeformationPermissions#database}

---

##### `DataLocation`<sup>Optional</sup> <a name="DataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dataLocation"></a>

```go
DataLocation LakeformationPermissionsDataLocation
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

data_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#data_location LakeformationPermissions#data_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#id LakeformationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LfTag`<sup>Optional</sup> <a name="LfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTag"></a>

```go
LfTag LakeformationPermissionsLfTag
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#lf_tag LakeformationPermissions#lf_tag}

---

##### `LfTagPolicy`<sup>Optional</sup> <a name="LfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTagPolicy"></a>

```go
LfTagPolicy LakeformationPermissionsLfTagPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

lf_tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#lf_tag_policy LakeformationPermissions#lf_tag_policy}

---

##### `PermissionsWithGrantOption`<sup>Optional</sup> <a name="PermissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissionsWithGrantOption"></a>

```go
PermissionsWithGrantOption *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.table"></a>

```go
Table LakeformationPermissionsTable
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#table LakeformationPermissions#table}

---

##### `TableWithColumns`<sup>Optional</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.tableWithColumns"></a>

```go
TableWithColumns LakeformationPermissionsTableWithColumns
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#table_with_columns LakeformationPermissions#table_with_columns}

---

### LakeformationPermissionsDatabase <a name="LakeformationPermissionsDatabase" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

&lakeformationpermissions.LakeformationPermissionsDatabase {
	Name: *string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsDataLocation <a name="LakeformationPermissionsDataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

&lakeformationpermissions.LakeformationPermissionsDataLocation {
	Arn: *string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#arn LakeformationPermissions#arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#arn LakeformationPermissions#arn}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsLfTag <a name="LakeformationPermissionsLfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

&lakeformationpermissions.LakeformationPermissionsLfTag {
	Key: *string,
	Values: *[]*string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsLfTagPolicy <a name="LakeformationPermissionsLfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

&lakeformationpermissions.LakeformationPermissionsLfTagPolicy {
	Expression: interface{},
	ResourceType: *string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.expression">Expression</a></code> | <code>interface{}</code> | expression block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#resource_type LakeformationPermissions#resource_type}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.expression"></a>

```go
Expression interface{}
```

- *Type:* interface{}

expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#expression LakeformationPermissions#expression}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#resource_type LakeformationPermissions#resource_type}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsLfTagPolicyExpression <a name="LakeformationPermissionsLfTagPolicyExpression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

&lakeformationpermissions.LakeformationPermissionsLfTagPolicyExpression {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}.

---

### LakeformationPermissionsTable <a name="LakeformationPermissionsTable" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

&lakeformationpermissions.LakeformationPermissionsTable {
	DatabaseName: *string,
	CatalogId: *string,
	Name: *string,
	Wildcard: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.wildcard">Wildcard</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.wildcard"></a>

```go
Wildcard interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}.

---

### LakeformationPermissionsTableWithColumns <a name="LakeformationPermissionsTableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

&lakeformationpermissions.LakeformationPermissionsTableWithColumns {
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
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#column_names LakeformationPermissions#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#excluded_column_names LakeformationPermissions#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.wildcard">Wildcard</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#column_names LakeformationPermissions#column_names}.

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.excludedColumnNames"></a>

```go
ExcludedColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#excluded_column_names LakeformationPermissions#excluded_column_names}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.wildcard"></a>

```go
Wildcard interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationPermissionsDatabaseOutputReference <a name="LakeformationPermissionsDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.NewLakeformationPermissionsDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPermissionsDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() LakeformationPermissionsDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

---


### LakeformationPermissionsDataLocationOutputReference <a name="LakeformationPermissionsDataLocationOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.NewLakeformationPermissionsDataLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPermissionsDataLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() LakeformationPermissionsDataLocation
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

---


### LakeformationPermissionsLfTagOutputReference <a name="LakeformationPermissionsLfTagOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.NewLakeformationPermissionsLfTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPermissionsLfTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.internalValue"></a>

```go
func InternalValue() LakeformationPermissionsLfTag
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

---


### LakeformationPermissionsLfTagPolicyExpressionList <a name="LakeformationPermissionsLfTagPolicyExpressionList" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.NewLakeformationPermissionsLfTagPolicyExpressionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakeformationPermissionsLfTagPolicyExpressionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.get"></a>

```go
func Get(index *f64) LakeformationPermissionsLfTagPolicyExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPermissionsLfTagPolicyExpressionOutputReference <a name="LakeformationPermissionsLfTagPolicyExpressionOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.NewLakeformationPermissionsLfTagPolicyExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakeformationPermissionsLfTagPolicyExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationPermissionsLfTagPolicyOutputReference <a name="LakeformationPermissionsLfTagPolicyOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.NewLakeformationPermissionsLfTagPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPermissionsLfTagPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.putExpression"></a>

```go
func PutExpression(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList">LakeformationPermissionsLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expression"></a>

```go
func Expression() LakeformationPermissionsLfTagPolicyExpressionList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList">LakeformationPermissionsLfTagPolicyExpressionList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LakeformationPermissionsLfTagPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

---


### LakeformationPermissionsTableOutputReference <a name="LakeformationPermissionsTableOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.NewLakeformationPermissionsTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPermissionsTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetWildcard"></a>

```go
func ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcard">Wildcard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcardInput"></a>

```go
func WildcardInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcard"></a>

```go
func Wildcard() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.internalValue"></a>

```go
func InternalValue() LakeformationPermissionsTable
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

---


### LakeformationPermissionsTableWithColumnsOutputReference <a name="LakeformationPermissionsTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationpermissions"

lakeformationpermissions.NewLakeformationPermissionsTableWithColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationPermissionsTableWithColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames"></a>

```go
func ResetColumnNames()
```

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```go
func ResetExcludedColumnNames()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetWildcard"></a>

```go
func ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcard">Wildcard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```go
func ExcludedColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput"></a>

```go
func WildcardInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```go
func ExcludedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcard"></a>

```go
func Wildcard() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() LakeformationPermissionsTableWithColumns
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

---



