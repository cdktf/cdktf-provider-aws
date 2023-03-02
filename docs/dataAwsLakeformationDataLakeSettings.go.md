# `dataAwsLakeformationDataLakeSettings` Submodule <a name="`dataAwsLakeformationDataLakeSettings` Submodule" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLakeformationDataLakeSettings <a name="DataAwsLakeformationDataLakeSettings" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

dataawslakeformationdatalakesettings.NewDataAwsLakeformationDataLakeSettings(scope Construct, id *string, config DataAwsLakeformationDataLakeSettingsConfig) DataAwsLakeformationDataLakeSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig">DataAwsLakeformationDataLakeSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig">DataAwsLakeformationDataLakeSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

dataawslakeformationdatalakesettings.DataAwsLakeformationDataLakeSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

dataawslakeformationdatalakesettings.DataAwsLakeformationDataLakeSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

dataawslakeformationdatalakesettings.DataAwsLakeformationDataLakeSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.admins">Admins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createDatabaseDefaultPermissions">CreateDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createTableDefaultPermissions">CreateTableDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.trustedResourceOwners">TrustedResourceOwners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Admins`<sup>Required</sup> <a name="Admins" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.admins"></a>

```go
func Admins() *[]*string
```

- *Type:* *[]*string

---

##### `CreateDatabaseDefaultPermissions`<sup>Required</sup> <a name="CreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

```go
func CreateDatabaseDefaultPermissions() DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a>

---

##### `CreateTableDefaultPermissions`<sup>Required</sup> <a name="CreateTableDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createTableDefaultPermissions"></a>

```go
func CreateTableDefaultPermissions() DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a>

---

##### `TrustedResourceOwners`<sup>Required</sup> <a name="TrustedResourceOwners" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.trustedResourceOwners"></a>

```go
func TrustedResourceOwners() *[]*string
```

- *Type:* *[]*string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLakeformationDataLakeSettingsConfig <a name="DataAwsLakeformationDataLakeSettingsConfig" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

&dataawslakeformationdatalakesettings.DataAwsLakeformationDataLakeSettingsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CatalogId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

&dataawslakeformationdatalakesettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {

}
```


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

&dataawslakeformationdatalakesettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

dataawslakeformationdatalakesettings.NewDataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get"></a>

```go
func Get(index *f64) DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

dataawslakeformationdatalakesettings.NewDataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>

---


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

dataawslakeformationdatalakesettings.NewDataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get"></a>

```go
func Get(index *f64) DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslakeformationdatalakesettings"

dataawslakeformationdatalakesettings.NewDataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions</a>

---



