# `lakeformationDataLakeSettings` Submodule <a name="`lakeformationDataLakeSettings` Submodule" id="@cdktf/provider-aws.lakeformationDataLakeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataLakeSettings <a name="LakeformationDataLakeSettings" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

lakeformationdatalakesettings.NewLakeformationDataLakeSettings(scope Construct, id *string, config LakeformationDataLakeSettingsConfig) LakeformationDataLakeSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig">LakeformationDataLakeSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig">LakeformationDataLakeSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions">PutCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions">PutCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAdmins">ResetAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateDatabaseDefaultPermissions">ResetCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateTableDefaultPermissions">ResetCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetTrustedResourceOwners">ResetTrustedResourceOwners</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCreateDatabaseDefaultPermissions` <a name="PutCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions"></a>

```go
func PutCreateDatabaseDefaultPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCreateTableDefaultPermissions` <a name="PutCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions"></a>

```go
func PutCreateTableDefaultPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdmins` <a name="ResetAdmins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAdmins"></a>

```go
func ResetAdmins()
```

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetCreateDatabaseDefaultPermissions` <a name="ResetCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateDatabaseDefaultPermissions"></a>

```go
func ResetCreateDatabaseDefaultPermissions()
```

##### `ResetCreateTableDefaultPermissions` <a name="ResetCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateTableDefaultPermissions"></a>

```go
func ResetCreateTableDefaultPermissions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetTrustedResourceOwners` <a name="ResetTrustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetTrustedResourceOwners"></a>

```go
func ResetTrustedResourceOwners()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

lakeformationdatalakesettings.LakeformationDataLakeSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

lakeformationdatalakesettings.LakeformationDataLakeSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

lakeformationdatalakesettings.LakeformationDataLakeSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissions">CreateDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissions">CreateTableDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList">LakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.adminsInput">AdminsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissionsInput">CreateDatabaseDefaultPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissionsInput">CreateTableDefaultPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwnersInput">TrustedResourceOwnersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.admins">Admins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwners">TrustedResourceOwners</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateDatabaseDefaultPermissions`<sup>Required</sup> <a name="CreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

```go
func CreateDatabaseDefaultPermissions() LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a>

---

##### `CreateTableDefaultPermissions`<sup>Required</sup> <a name="CreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissions"></a>

```go
func CreateTableDefaultPermissions() LakeformationDataLakeSettingsCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList">LakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a>

---

##### `AdminsInput`<sup>Optional</sup> <a name="AdminsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.adminsInput"></a>

```go
func AdminsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `CreateDatabaseDefaultPermissionsInput`<sup>Optional</sup> <a name="CreateDatabaseDefaultPermissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissionsInput"></a>

```go
func CreateDatabaseDefaultPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `CreateTableDefaultPermissionsInput`<sup>Optional</sup> <a name="CreateTableDefaultPermissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissionsInput"></a>

```go
func CreateTableDefaultPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TrustedResourceOwnersInput`<sup>Optional</sup> <a name="TrustedResourceOwnersInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwnersInput"></a>

```go
func TrustedResourceOwnersInput() *[]*string
```

- *Type:* *[]*string

---

##### `Admins`<sup>Required</sup> <a name="Admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.admins"></a>

```go
func Admins() *[]*string
```

- *Type:* *[]*string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TrustedResourceOwners`<sup>Required</sup> <a name="TrustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwners"></a>

```go
func TrustedResourceOwners() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataLakeSettingsConfig <a name="LakeformationDataLakeSettingsConfig" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

&lakeformationdatalakesettings.LakeformationDataLakeSettingsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Admins: *[]*string,
	CatalogId: *string,
	CreateDatabaseDefaultPermissions: interface{},
	CreateTableDefaultPermissions: interface{},
	Id: *string,
	TrustedResourceOwners: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.admins">Admins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createDatabaseDefaultPermissions">CreateDatabaseDefaultPermissions</a></code> | <code>interface{}</code> | create_database_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createTableDefaultPermissions">CreateTableDefaultPermissions</a></code> | <code>interface{}</code> | create_table_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.trustedResourceOwners">TrustedResourceOwners</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Admins`<sup>Optional</sup> <a name="Admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.admins"></a>

```go
Admins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}.

---

##### `CreateDatabaseDefaultPermissions`<sup>Optional</sup> <a name="CreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createDatabaseDefaultPermissions"></a>

```go
CreateDatabaseDefaultPermissions interface{}
```

- *Type:* interface{}

create_database_default_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}

---

##### `CreateTableDefaultPermissions`<sup>Optional</sup> <a name="CreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createTableDefaultPermissions"></a>

```go
CreateTableDefaultPermissions interface{}
```

- *Type:* interface{}

create_table_default_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TrustedResourceOwners`<sup>Optional</sup> <a name="TrustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.trustedResourceOwners"></a>

```go
TrustedResourceOwners *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}.

---

### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

&lakeformationdatalakesettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
	Permissions: *[]*string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.permissions">Permissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}.

---

### LakeformationDataLakeSettingsCreateTableDefaultPermissions <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

&lakeformationdatalakesettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions {
	Permissions: *[]*string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.permissions">Permissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

lakeformationdatalakesettings.NewLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get"></a>

```go
func Get(index *f64) LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

lakeformationdatalakesettings.NewLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataLakeSettingsCreateTableDefaultPermissionsList <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissionsList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

lakeformationdatalakesettings.NewLakeformationDataLakeSettingsCreateTableDefaultPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakeformationDataLakeSettingsCreateTableDefaultPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get"></a>

```go
func Get(index *f64) LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatalakesettings"

lakeformationdatalakesettings.NewLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



