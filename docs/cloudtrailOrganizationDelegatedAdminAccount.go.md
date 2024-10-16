# `cloudtrailOrganizationDelegatedAdminAccount` Submodule <a name="`cloudtrailOrganizationDelegatedAdminAccount` Submodule" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailOrganizationDelegatedAdminAccount <a name="CloudtrailOrganizationDelegatedAdminAccount" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/cloudtrail_organization_delegated_admin_account aws_cloudtrail_organization_delegated_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudtrailorganizationdelegatedadminaccount"

cloudtrailorganizationdelegatedadminaccount.NewCloudtrailOrganizationDelegatedAdminAccount(scope Construct, id *string, config CloudtrailOrganizationDelegatedAdminAccountConfig) CloudtrailOrganizationDelegatedAdminAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig">CloudtrailOrganizationDelegatedAdminAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig">CloudtrailOrganizationDelegatedAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudtrailOrganizationDelegatedAdminAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudtrailorganizationdelegatedadminaccount"

cloudtrailorganizationdelegatedadminaccount.CloudtrailOrganizationDelegatedAdminAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudtrailorganizationdelegatedadminaccount"

cloudtrailorganizationdelegatedadminaccount.CloudtrailOrganizationDelegatedAdminAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudtrailorganizationdelegatedadminaccount"

cloudtrailorganizationdelegatedadminaccount.CloudtrailOrganizationDelegatedAdminAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudtrailorganizationdelegatedadminaccount"

cloudtrailorganizationdelegatedadminaccount.CloudtrailOrganizationDelegatedAdminAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudtrailOrganizationDelegatedAdminAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudtrailOrganizationDelegatedAdminAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudtrailOrganizationDelegatedAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/cloudtrail_organization_delegated_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudtrailOrganizationDelegatedAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.servicePrincipal">ServicePrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.servicePrincipal"></a>

```go
func ServicePrincipal() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailOrganizationDelegatedAdminAccountConfig <a name="CloudtrailOrganizationDelegatedAdminAccountConfig" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudtrailorganizationdelegatedadminaccount"

&cloudtrailorganizationdelegatedadminaccount.CloudtrailOrganizationDelegatedAdminAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}.

---



