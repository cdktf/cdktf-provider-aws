# `codeartifactDomainPermissionsPolicy` Submodule <a name="`codeartifactDomainPermissionsPolicy` Submodule" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactDomainPermissionsPolicy <a name="CodeartifactDomainPermissionsPolicy" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy aws_codeartifact_domain_permissions_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codeartifactdomainpermissionspolicy"

codeartifactdomainpermissionspolicy.NewCodeartifactDomainPermissionsPolicy(scope Construct, id *string, config CodeartifactDomainPermissionsPolicyConfig) CodeartifactDomainPermissionsPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig">CodeartifactDomainPermissionsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig">CodeartifactDomainPermissionsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetDomainOwner">ResetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyRevision">ResetPolicyRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDomainOwner` <a name="ResetDomainOwner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetDomainOwner"></a>

```go
func ResetDomainOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyDocument"></a>

```go
func ResetPolicyDocument()
```

##### `ResetPolicyRevision` <a name="ResetPolicyRevision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyRevision"></a>

```go
func ResetPolicyRevision()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CodeartifactDomainPermissionsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codeartifactdomainpermissionspolicy"

codeartifactdomainpermissionspolicy.CodeartifactDomainPermissionsPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codeartifactdomainpermissionspolicy"

codeartifactdomainpermissionspolicy.CodeartifactDomainPermissionsPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codeartifactdomainpermissionspolicy"

codeartifactdomainpermissionspolicy.CodeartifactDomainPermissionsPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codeartifactdomainpermissionspolicy"

codeartifactdomainpermissionspolicy.CodeartifactDomainPermissionsPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CodeartifactDomainPermissionsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodeartifactDomainPermissionsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodeartifactDomainPermissionsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CodeartifactDomainPermissionsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwnerInput">DomainOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevisionInput">PolicyRevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwner">DomainOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevision">PolicyRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `DomainOwnerInput`<sup>Optional</sup> <a name="DomainOwnerInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwnerInput"></a>

```go
func DomainOwnerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `PolicyRevisionInput`<sup>Optional</sup> <a name="PolicyRevisionInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevisionInput"></a>

```go
func PolicyRevisionInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `DomainOwner`<sup>Required</sup> <a name="DomainOwner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwner"></a>

```go
func DomainOwner() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `PolicyRevision`<sup>Required</sup> <a name="PolicyRevision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevision"></a>

```go
func PolicyRevision() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactDomainPermissionsPolicyConfig <a name="CodeartifactDomainPermissionsPolicyConfig" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/codeartifactdomainpermissionspolicy"

&codeartifactdomainpermissionspolicy.CodeartifactDomainPermissionsPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	DomainOwner: *string,
	Id: *string,
	PolicyDocument: *string,
	PolicyRevision: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#domain CodeartifactDomainPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domainOwner">DomainOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#id CodeartifactDomainPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#policy_document CodeartifactDomainPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyRevision">PolicyRevision</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#domain CodeartifactDomainPermissionsPolicy#domain}.

---

##### `DomainOwner`<sup>Optional</sup> <a name="DomainOwner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domainOwner"></a>

```go
DomainOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#id CodeartifactDomainPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#policy_document CodeartifactDomainPermissionsPolicy#policy_document}.

---

##### `PolicyRevision`<sup>Optional</sup> <a name="PolicyRevision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyRevision"></a>

```go
PolicyRevision *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codeartifact_domain_permissions_policy#region CodeartifactDomainPermissionsPolicy#region}

---



