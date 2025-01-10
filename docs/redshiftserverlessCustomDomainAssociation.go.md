# `redshiftserverlessCustomDomainAssociation` Submodule <a name="`redshiftserverlessCustomDomainAssociation` Submodule" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessCustomDomainAssociation <a name="RedshiftserverlessCustomDomainAssociation" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/redshiftserverless_custom_domain_association aws_redshiftserverless_custom_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/redshiftserverlesscustomdomainassociation"

redshiftserverlesscustomdomainassociation.NewRedshiftserverlessCustomDomainAssociation(scope Construct, id *string, config RedshiftserverlessCustomDomainAssociationConfig) RedshiftserverlessCustomDomainAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig">RedshiftserverlessCustomDomainAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig">RedshiftserverlessCustomDomainAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftserverlessCustomDomainAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/redshiftserverlesscustomdomainassociation"

redshiftserverlesscustomdomainassociation.RedshiftserverlessCustomDomainAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/redshiftserverlesscustomdomainassociation"

redshiftserverlesscustomdomainassociation.RedshiftserverlessCustomDomainAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/redshiftserverlesscustomdomainassociation"

redshiftserverlesscustomdomainassociation.RedshiftserverlessCustomDomainAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/redshiftserverlesscustomdomainassociation"

redshiftserverlesscustomdomainassociation.RedshiftserverlessCustomDomainAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RedshiftserverlessCustomDomainAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftserverlessCustomDomainAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftserverlessCustomDomainAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/redshiftserverless_custom_domain_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessCustomDomainAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateExpiryTime">CustomDomainCertificateExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateArnInput">CustomDomainCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainNameInput">CustomDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateArn">CustomDomainCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainName">CustomDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomDomainCertificateExpiryTime`<sup>Required</sup> <a name="CustomDomainCertificateExpiryTime" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateExpiryTime"></a>

```go
func CustomDomainCertificateExpiryTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CustomDomainCertificateArnInput`<sup>Optional</sup> <a name="CustomDomainCertificateArnInput" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateArnInput"></a>

```go
func CustomDomainCertificateArnInput() *string
```

- *Type:* *string

---

##### `CustomDomainNameInput`<sup>Optional</sup> <a name="CustomDomainNameInput" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainNameInput"></a>

```go
func CustomDomainNameInput() *string
```

- *Type:* *string

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.workgroupNameInput"></a>

```go
func WorkgroupNameInput() *string
```

- *Type:* *string

---

##### `CustomDomainCertificateArn`<sup>Required</sup> <a name="CustomDomainCertificateArn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateArn"></a>

```go
func CustomDomainCertificateArn() *string
```

- *Type:* *string

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainName"></a>

```go
func CustomDomainName() *string
```

- *Type:* *string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.workgroupName"></a>

```go
func WorkgroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessCustomDomainAssociationConfig <a name="RedshiftserverlessCustomDomainAssociationConfig" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/redshiftserverlesscustomdomainassociation"

&redshiftserverlesscustomdomainassociation.RedshiftserverlessCustomDomainAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomDomainCertificateArn: *string,
	CustomDomainName: *string,
	WorkgroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.customDomainCertificateArn">CustomDomainCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_certificate_arn RedshiftserverlessCustomDomainAssociation#custom_domain_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.customDomainName">CustomDomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_name RedshiftserverlessCustomDomainAssociation#custom_domain_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/redshiftserverless_custom_domain_association#workgroup_name RedshiftserverlessCustomDomainAssociation#workgroup_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomDomainCertificateArn`<sup>Required</sup> <a name="CustomDomainCertificateArn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.customDomainCertificateArn"></a>

```go
CustomDomainCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_certificate_arn RedshiftserverlessCustomDomainAssociation#custom_domain_certificate_arn}.

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.customDomainName"></a>

```go
CustomDomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_name RedshiftserverlessCustomDomainAssociation#custom_domain_name}.

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.workgroupName"></a>

```go
WorkgroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/redshiftserverless_custom_domain_association#workgroup_name RedshiftserverlessCustomDomainAssociation#workgroup_name}.

---



