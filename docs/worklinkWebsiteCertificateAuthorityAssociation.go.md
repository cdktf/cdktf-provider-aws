# `worklinkWebsiteCertificateAuthorityAssociation` Submodule <a name="`worklinkWebsiteCertificateAuthorityAssociation` Submodule" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorklinkWebsiteCertificateAuthorityAssociation <a name="WorklinkWebsiteCertificateAuthorityAssociation" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association aws_worklink_website_certificate_authority_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkwebsitecertificateauthorityassociation"

worklinkwebsitecertificateauthorityassociation.NewWorklinkWebsiteCertificateAuthorityAssociation(scope Construct, id *string, config WorklinkWebsiteCertificateAuthorityAssociationConfig) WorklinkWebsiteCertificateAuthorityAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig">WorklinkWebsiteCertificateAuthorityAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig">WorklinkWebsiteCertificateAuthorityAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorklinkWebsiteCertificateAuthorityAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkwebsitecertificateauthorityassociation"

worklinkwebsitecertificateauthorityassociation.WorklinkWebsiteCertificateAuthorityAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkwebsitecertificateauthorityassociation"

worklinkwebsitecertificateauthorityassociation.WorklinkWebsiteCertificateAuthorityAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkwebsitecertificateauthorityassociation"

worklinkwebsitecertificateauthorityassociation.WorklinkWebsiteCertificateAuthorityAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkwebsitecertificateauthorityassociation"

worklinkwebsitecertificateauthorityassociation.WorklinkWebsiteCertificateAuthorityAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorklinkWebsiteCertificateAuthorityAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorklinkWebsiteCertificateAuthorityAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorklinkWebsiteCertificateAuthorityAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorklinkWebsiteCertificateAuthorityAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.websiteCaId">WebsiteCaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArnInput">FleetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArn">FleetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WebsiteCaId`<sup>Required</sup> <a name="WebsiteCaId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.websiteCaId"></a>

```go
func WebsiteCaId() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FleetArnInput`<sup>Optional</sup> <a name="FleetArnInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArnInput"></a>

```go
func FleetArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FleetArn`<sup>Required</sup> <a name="FleetArn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArn"></a>

```go
func FleetArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorklinkWebsiteCertificateAuthorityAssociationConfig <a name="WorklinkWebsiteCertificateAuthorityAssociationConfig" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkwebsitecertificateauthorityassociation"

&worklinkwebsitecertificateauthorityassociation.WorklinkWebsiteCertificateAuthorityAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Certificate: *string,
	FleetArn: *string,
	DisplayName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association#certificate WorklinkWebsiteCertificateAuthorityAssociation#certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.fleetArn">FleetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association#fleet_arn WorklinkWebsiteCertificateAuthorityAssociation#fleet_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association#display_name WorklinkWebsiteCertificateAuthorityAssociation#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association#id WorklinkWebsiteCertificateAuthorityAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association#certificate WorklinkWebsiteCertificateAuthorityAssociation#certificate}.

---

##### `FleetArn`<sup>Required</sup> <a name="FleetArn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.fleetArn"></a>

```go
FleetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association#fleet_arn WorklinkWebsiteCertificateAuthorityAssociation#fleet_arn}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association#display_name WorklinkWebsiteCertificateAuthorityAssociation#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_website_certificate_authority_association#id WorklinkWebsiteCertificateAuthorityAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



