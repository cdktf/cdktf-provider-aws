# `accountPrimaryContact` Submodule <a name="`accountPrimaryContact` Submodule" id="@cdktf/provider-aws.accountPrimaryContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountPrimaryContact <a name="AccountPrimaryContact" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact aws_account_primary_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/accountprimarycontact"

accountprimarycontact.NewAccountPrimaryContact(scope Construct, id *string, config AccountPrimaryContactConfig) AccountPrimaryContact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig">AccountPrimaryContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig">AccountPrimaryContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3">ResetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName">ResetCompanyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty">ResetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion">ResetStateOrRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl">ResetWebsiteUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetAddressLine3` <a name="ResetAddressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3"></a>

```go
func ResetAddressLine3()
```

##### `ResetCompanyName` <a name="ResetCompanyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName"></a>

```go
func ResetCompanyName()
```

##### `ResetDistrictOrCounty` <a name="ResetDistrictOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty"></a>

```go
func ResetDistrictOrCounty()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId"></a>

```go
func ResetId()
```

##### `ResetStateOrRegion` <a name="ResetStateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion"></a>

```go
func ResetStateOrRegion()
```

##### `ResetWebsiteUrl` <a name="ResetWebsiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl"></a>

```go
func ResetWebsiteUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccountPrimaryContact resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/accountprimarycontact"

accountprimarycontact.AccountPrimaryContact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/accountprimarycontact"

accountprimarycontact.AccountPrimaryContact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/accountprimarycontact"

accountprimarycontact.AccountPrimaryContact_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/accountprimarycontact"

accountprimarycontact.AccountPrimaryContact_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AccountPrimaryContact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccountPrimaryContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccountPrimaryContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AccountPrimaryContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input">AddressLine3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput">CompanyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput">DistrictOrCountyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput">StateOrRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput">WebsiteUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3">AddressLine3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty">DistrictOrCounty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion">StateOrRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl">WebsiteUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `AddressLine3Input`<sup>Optional</sup> <a name="AddressLine3Input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input"></a>

```go
func AddressLine3Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput"></a>

```go
func CompanyNameInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `DistrictOrCountyInput`<sup>Optional</sup> <a name="DistrictOrCountyInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput"></a>

```go
func DistrictOrCountyInput() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `StateOrRegionInput`<sup>Optional</sup> <a name="StateOrRegionInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput"></a>

```go
func StateOrRegionInput() *string
```

- *Type:* *string

---

##### `WebsiteUrlInput`<sup>Optional</sup> <a name="WebsiteUrlInput" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput"></a>

```go
func WebsiteUrlInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3"></a>

```go
func AddressLine3() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `DistrictOrCounty`<sup>Required</sup> <a name="DistrictOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty"></a>

```go
func DistrictOrCounty() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `StateOrRegion`<sup>Required</sup> <a name="StateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion"></a>

```go
func StateOrRegion() *string
```

- *Type:* *string

---

##### `WebsiteUrl`<sup>Required</sup> <a name="WebsiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl"></a>

```go
func WebsiteUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountPrimaryContactConfig <a name="AccountPrimaryContactConfig" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/accountprimarycontact"

&accountprimarycontact.AccountPrimaryContactConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AddressLine1: *string,
	City: *string,
	CountryCode: *string,
	FullName: *string,
	PhoneNumber: *string,
	PostalCode: *string,
	AccountId: *string,
	AddressLine2: *string,
	AddressLine3: *string,
	CompanyName: *string,
	DistrictOrCounty: *string,
	Id: *string,
	StateOrRegion: *string,
	WebsiteUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#city AccountPrimaryContact#city}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode">PostalCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3">AddressLine3</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName">CompanyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty">DistrictOrCounty</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#id AccountPrimaryContact#id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion">StateOrRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl">WebsiteUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}.

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#city AccountPrimaryContact#city}.

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}.

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}.

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}.

---

##### `AddressLine3`<sup>Optional</sup> <a name="AddressLine3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3"></a>

```go
AddressLine3 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}.

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName"></a>

```go
CompanyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}.

---

##### `DistrictOrCounty`<sup>Optional</sup> <a name="DistrictOrCounty" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty"></a>

```go
DistrictOrCounty *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#id AccountPrimaryContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StateOrRegion`<sup>Optional</sup> <a name="StateOrRegion" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion"></a>

```go
StateOrRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}.

---

##### `WebsiteUrl`<sup>Optional</sup> <a name="WebsiteUrl" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl"></a>

```go
WebsiteUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}.

---



