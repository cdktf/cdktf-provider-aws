# `redshiftserverlessNamespace` Submodule <a name="`redshiftserverlessNamespace` Submodule" id="@cdktf/provider-aws.redshiftserverlessNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessNamespace <a name="RedshiftserverlessNamespace" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace aws_redshiftserverless_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/redshiftserverlessnamespace"

redshiftserverlessnamespace.NewRedshiftserverlessNamespace(scope Construct, id *string, config RedshiftserverlessNamespaceConfig) RedshiftserverlessNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId">ResetAdminPasswordSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername">ResetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword">ResetAdminUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPasswordWo">ResetAdminUserPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPasswordWoVersion">ResetAdminUserPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn">ResetDefaultIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports">ResetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword">ResetManageAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdminPasswordSecretKmsKeyId` <a name="ResetAdminPasswordSecretKmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId"></a>

```go
func ResetAdminPasswordSecretKmsKeyId()
```

##### `ResetAdminUsername` <a name="ResetAdminUsername" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername"></a>

```go
func ResetAdminUsername()
```

##### `ResetAdminUserPassword` <a name="ResetAdminUserPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword"></a>

```go
func ResetAdminUserPassword()
```

##### `ResetAdminUserPasswordWo` <a name="ResetAdminUserPasswordWo" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPasswordWo"></a>

```go
func ResetAdminUserPasswordWo()
```

##### `ResetAdminUserPasswordWoVersion` <a name="ResetAdminUserPasswordWoVersion" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPasswordWoVersion"></a>

```go
func ResetAdminUserPasswordWoVersion()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName"></a>

```go
func ResetDbName()
```

##### `ResetDefaultIamRoleArn` <a name="ResetDefaultIamRoleArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn"></a>

```go
func ResetDefaultIamRoleArn()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles"></a>

```go
func ResetIamRoles()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLogExports` <a name="ResetLogExports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports"></a>

```go
func ResetLogExports()
```

##### `ResetManageAdminPassword` <a name="ResetManageAdminPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword"></a>

```go
func ResetManageAdminPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftserverlessNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/redshiftserverlessnamespace"

redshiftserverlessnamespace.RedshiftserverlessNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/redshiftserverlessnamespace"

redshiftserverlessnamespace.RedshiftserverlessNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/redshiftserverlessnamespace"

redshiftserverlessnamespace.RedshiftserverlessNamespace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/redshiftserverlessnamespace"

redshiftserverlessnamespace.RedshiftserverlessNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RedshiftserverlessNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftserverlessNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftserverlessNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretArn">AdminPasswordSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput">AdminPasswordSecretKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput">AdminUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordWoInput">AdminUserPasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordWoVersionInput">AdminUserPasswordWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput">DefaultIamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput">IamRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput">LogExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput">ManageAdminPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId">AdminPasswordSecretKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword">AdminUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordWo">AdminUserPasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordWoVersion">AdminUserPasswordWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports">LogExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword">ManageAdminPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminPasswordSecretArn`<sup>Required</sup> <a name="AdminPasswordSecretArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretArn"></a>

```go
func AdminPasswordSecretArn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `AdminPasswordSecretKmsKeyIdInput`<sup>Optional</sup> <a name="AdminPasswordSecretKmsKeyIdInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput"></a>

```go
func AdminPasswordSecretKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput"></a>

```go
func AdminUsernameInput() *string
```

- *Type:* *string

---

##### `AdminUserPasswordInput`<sup>Optional</sup> <a name="AdminUserPasswordInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput"></a>

```go
func AdminUserPasswordInput() *string
```

- *Type:* *string

---

##### `AdminUserPasswordWoInput`<sup>Optional</sup> <a name="AdminUserPasswordWoInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordWoInput"></a>

```go
func AdminUserPasswordWoInput() *string
```

- *Type:* *string

---

##### `AdminUserPasswordWoVersionInput`<sup>Optional</sup> <a name="AdminUserPasswordWoVersionInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordWoVersionInput"></a>

```go
func AdminUserPasswordWoVersionInput() *f64
```

- *Type:* *f64

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DefaultIamRoleArnInput`<sup>Optional</sup> <a name="DefaultIamRoleArnInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput"></a>

```go
func DefaultIamRoleArnInput() *string
```

- *Type:* *string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput"></a>

```go
func IamRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LogExportsInput`<sup>Optional</sup> <a name="LogExportsInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput"></a>

```go
func LogExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ManageAdminPasswordInput`<sup>Optional</sup> <a name="ManageAdminPasswordInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput"></a>

```go
func ManageAdminPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput"></a>

```go
func NamespaceNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AdminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="AdminPasswordSecretKmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId"></a>

```go
func AdminPasswordSecretKmsKeyId() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `AdminUserPassword`<sup>Required</sup> <a name="AdminUserPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword"></a>

```go
func AdminUserPassword() *string
```

- *Type:* *string

---

##### `AdminUserPasswordWo`<sup>Required</sup> <a name="AdminUserPasswordWo" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordWo"></a>

```go
func AdminUserPasswordWo() *string
```

- *Type:* *string

---

##### `AdminUserPasswordWoVersion`<sup>Required</sup> <a name="AdminUserPasswordWoVersion" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordWoVersion"></a>

```go
func AdminUserPasswordWoVersion() *f64
```

- *Type:* *f64

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DefaultIamRoleArn`<sup>Required</sup> <a name="DefaultIamRoleArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn"></a>

```go
func DefaultIamRoleArn() *string
```

- *Type:* *string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports"></a>

```go
func LogExports() *[]*string
```

- *Type:* *[]*string

---

##### `ManageAdminPassword`<sup>Required</sup> <a name="ManageAdminPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword"></a>

```go
func ManageAdminPassword() interface{}
```

- *Type:* interface{}

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessNamespaceConfig <a name="RedshiftserverlessNamespaceConfig" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/redshiftserverlessnamespace"

&redshiftserverlessnamespace.RedshiftserverlessNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NamespaceName: *string,
	AdminPasswordSecretKmsKeyId: *string,
	AdminUsername: *string,
	AdminUserPassword: *string,
	AdminUserPasswordWo: *string,
	AdminUserPasswordWoVersion: *f64,
	DbName: *string,
	DefaultIamRoleArn: *string,
	IamRoles: *[]*string,
	Id: *string,
	KmsKeyId: *string,
	LogExports: *[]*string,
	ManageAdminPassword: interface{},
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId">AdminPasswordSecretKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword">AdminUserPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPasswordWo">AdminUserPasswordWo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_user_password_wo RedshiftserverlessNamespace#admin_user_password_wo}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPasswordWoVersion">AdminUserPasswordWoVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_user_password_wo_version RedshiftserverlessNamespace#admin_user_password_wo_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName">DbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports">LogExports</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword">ManageAdminPassword</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName"></a>

```go
NamespaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}.

---

##### `AdminPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="AdminPasswordSecretKmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId"></a>

```go
AdminPasswordSecretKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}.

---

##### `AdminUsername`<sup>Optional</sup> <a name="AdminUsername" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername"></a>

```go
AdminUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}.

---

##### `AdminUserPassword`<sup>Optional</sup> <a name="AdminUserPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword"></a>

```go
AdminUserPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}.

---

##### `AdminUserPasswordWo`<sup>Optional</sup> <a name="AdminUserPasswordWo" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPasswordWo"></a>

```go
AdminUserPasswordWo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_user_password_wo RedshiftserverlessNamespace#admin_user_password_wo}.

---

##### `AdminUserPasswordWoVersion`<sup>Optional</sup> <a name="AdminUserPasswordWoVersion" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPasswordWoVersion"></a>

```go
AdminUserPasswordWoVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#admin_user_password_wo_version RedshiftserverlessNamespace#admin_user_password_wo_version}.

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}.

---

##### `DefaultIamRoleArn`<sup>Optional</sup> <a name="DefaultIamRoleArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn"></a>

```go
DefaultIamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}.

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles"></a>

```go
IamRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}.

---

##### `LogExports`<sup>Optional</sup> <a name="LogExports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports"></a>

```go
LogExports *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}.

---

##### `ManageAdminPassword`<sup>Optional</sup> <a name="ManageAdminPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword"></a>

```go
ManageAdminPassword interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#region RedshiftserverlessNamespace#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}.

---



