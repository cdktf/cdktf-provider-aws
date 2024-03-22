# `ssoadminTrustedTokenIssuer` Submodule <a name="`ssoadminTrustedTokenIssuer` Submodule" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminTrustedTokenIssuer <a name="SsoadminTrustedTokenIssuer" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer aws_ssoadmin_trusted_token_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

ssoadmintrustedtokenissuer.NewSsoadminTrustedTokenIssuer(scope Construct, id *string, config SsoadminTrustedTokenIssuerConfig) SsoadminTrustedTokenIssuer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig">SsoadminTrustedTokenIssuerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig">SsoadminTrustedTokenIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.putTrustedTokenIssuerConfiguration">PutTrustedTokenIssuerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTrustedTokenIssuerConfiguration">ResetTrustedTokenIssuerConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTrustedTokenIssuerConfiguration` <a name="PutTrustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.putTrustedTokenIssuerConfiguration"></a>

```go
func PutTrustedTokenIssuerConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.putTrustedTokenIssuerConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetClientToken"></a>

```go
func ResetClientToken()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTrustedTokenIssuerConfiguration` <a name="ResetTrustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTrustedTokenIssuerConfiguration"></a>

```go
func ResetTrustedTokenIssuerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminTrustedTokenIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

ssoadmintrustedtokenissuer.SsoadminTrustedTokenIssuer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

ssoadmintrustedtokenissuer.SsoadminTrustedTokenIssuer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

ssoadmintrustedtokenissuer.SsoadminTrustedTokenIssuer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

ssoadmintrustedtokenissuer.SsoadminTrustedTokenIssuer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SsoadminTrustedTokenIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsoadminTrustedTokenIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsoadminTrustedTokenIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminTrustedTokenIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfiguration">TrustedTokenIssuerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientTokenInput">ClientTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfigurationInput">TrustedTokenIssuerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerTypeInput">TrustedTokenIssuerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerType">TrustedTokenIssuerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TrustedTokenIssuerConfiguration`<sup>Required</sup> <a name="TrustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfiguration"></a>

```go
func TrustedTokenIssuerConfiguration() SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList</a>

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientTokenInput"></a>

```go
func ClientTokenInput() *string
```

- *Type:* *string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrustedTokenIssuerConfigurationInput`<sup>Optional</sup> <a name="TrustedTokenIssuerConfigurationInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfigurationInput"></a>

```go
func TrustedTokenIssuerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TrustedTokenIssuerTypeInput`<sup>Optional</sup> <a name="TrustedTokenIssuerTypeInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerTypeInput"></a>

```go
func TrustedTokenIssuerTypeInput() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrustedTokenIssuerType`<sup>Required</sup> <a name="TrustedTokenIssuerType" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerType"></a>

```go
func TrustedTokenIssuerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminTrustedTokenIssuerConfig <a name="SsoadminTrustedTokenIssuerConfig" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

&ssoadmintrustedtokenissuer.SsoadminTrustedTokenIssuerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	Name: *string,
	TrustedTokenIssuerType: *string,
	ClientToken: *string,
	Tags: *map[string]*string,
	TrustedTokenIssuerConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#instance_arn SsoadminTrustedTokenIssuer#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#name SsoadminTrustedTokenIssuer#name}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerType">TrustedTokenIssuerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_type SsoadminTrustedTokenIssuer#trusted_token_issuer_type}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.clientToken">ClientToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#client_token SsoadminTrustedTokenIssuer#client_token}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#tags SsoadminTrustedTokenIssuer#tags}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerConfiguration">TrustedTokenIssuerConfiguration</a></code> | <code>interface{}</code> | trusted_token_issuer_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#instance_arn SsoadminTrustedTokenIssuer#instance_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#name SsoadminTrustedTokenIssuer#name}.

---

##### `TrustedTokenIssuerType`<sup>Required</sup> <a name="TrustedTokenIssuerType" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerType"></a>

```go
TrustedTokenIssuerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_type SsoadminTrustedTokenIssuer#trusted_token_issuer_type}.

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.clientToken"></a>

```go
ClientToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#client_token SsoadminTrustedTokenIssuer#client_token}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#tags SsoadminTrustedTokenIssuer#tags}.

---

##### `TrustedTokenIssuerConfiguration`<sup>Optional</sup> <a name="TrustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerConfiguration"></a>

```go
TrustedTokenIssuerConfiguration interface{}
```

- *Type:* interface{}

trusted_token_issuer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_configuration SsoadminTrustedTokenIssuer#trusted_token_issuer_configuration}

---

### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

&ssoadmintrustedtokenissuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration {
	OidcJwtConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration.property.oidcJwtConfiguration">OidcJwtConfiguration</a></code> | <code>interface{}</code> | oidc_jwt_configuration block. |

---

##### `OidcJwtConfiguration`<sup>Optional</sup> <a name="OidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration.property.oidcJwtConfiguration"></a>

```go
OidcJwtConfiguration interface{}
```

- *Type:* interface{}

oidc_jwt_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#oidc_jwt_configuration SsoadminTrustedTokenIssuer#oidc_jwt_configuration}

---

### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

&ssoadmintrustedtokenissuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration {
	ClaimAttributePath: *string,
	IdentityStoreAttributePath: *string,
	IssuerUrl: *string,
	JwksRetrievalOption: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.claimAttributePath">ClaimAttributePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#claim_attribute_path SsoadminTrustedTokenIssuer#claim_attribute_path}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.identityStoreAttributePath">IdentityStoreAttributePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#identity_store_attribute_path SsoadminTrustedTokenIssuer#identity_store_attribute_path}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#issuer_url SsoadminTrustedTokenIssuer#issuer_url}. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.jwksRetrievalOption">JwksRetrievalOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#jwks_retrieval_option SsoadminTrustedTokenIssuer#jwks_retrieval_option}. |

---

##### `ClaimAttributePath`<sup>Required</sup> <a name="ClaimAttributePath" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.claimAttributePath"></a>

```go
ClaimAttributePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#claim_attribute_path SsoadminTrustedTokenIssuer#claim_attribute_path}.

---

##### `IdentityStoreAttributePath`<sup>Required</sup> <a name="IdentityStoreAttributePath" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.identityStoreAttributePath"></a>

```go
IdentityStoreAttributePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#identity_store_attribute_path SsoadminTrustedTokenIssuer#identity_store_attribute_path}.

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.issuerUrl"></a>

```go
IssuerUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#issuer_url SsoadminTrustedTokenIssuer#issuer_url}.

---

##### `JwksRetrievalOption`<sup>Required</sup> <a name="JwksRetrievalOption" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.jwksRetrievalOption"></a>

```go
JwksRetrievalOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ssoadmin_trusted_token_issuer#jwks_retrieval_option SsoadminTrustedTokenIssuer#jwks_retrieval_option}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

ssoadmintrustedtokenissuer.NewSsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.get"></a>

```go
func Get(index *f64) SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

ssoadmintrustedtokenissuer.NewSsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.get"></a>

```go
func Get(index *f64) SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

ssoadmintrustedtokenissuer.NewSsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePathInput">ClaimAttributePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePathInput">IdentityStoreAttributePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOptionInput">JwksRetrievalOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePath">ClaimAttributePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePath">IdentityStoreAttributePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOption">JwksRetrievalOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimAttributePathInput`<sup>Optional</sup> <a name="ClaimAttributePathInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePathInput"></a>

```go
func ClaimAttributePathInput() *string
```

- *Type:* *string

---

##### `IdentityStoreAttributePathInput`<sup>Optional</sup> <a name="IdentityStoreAttributePathInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePathInput"></a>

```go
func IdentityStoreAttributePathInput() *string
```

- *Type:* *string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrlInput"></a>

```go
func IssuerUrlInput() *string
```

- *Type:* *string

---

##### `JwksRetrievalOptionInput`<sup>Optional</sup> <a name="JwksRetrievalOptionInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOptionInput"></a>

```go
func JwksRetrievalOptionInput() *string
```

- *Type:* *string

---

##### `ClaimAttributePath`<sup>Required</sup> <a name="ClaimAttributePath" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePath"></a>

```go
func ClaimAttributePath() *string
```

- *Type:* *string

---

##### `IdentityStoreAttributePath`<sup>Required</sup> <a name="IdentityStoreAttributePath" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePath"></a>

```go
func IdentityStoreAttributePath() *string
```

- *Type:* *string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrl"></a>

```go
func IssuerUrl() *string
```

- *Type:* *string

---

##### `JwksRetrievalOption`<sup>Required</sup> <a name="JwksRetrievalOption" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOption"></a>

```go
func JwksRetrievalOption() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmintrustedtokenissuer"

ssoadmintrustedtokenissuer.NewSsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.putOidcJwtConfiguration">PutOidcJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resetOidcJwtConfiguration">ResetOidcJwtConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOidcJwtConfiguration` <a name="PutOidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.putOidcJwtConfiguration"></a>

```go
func PutOidcJwtConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.putOidcJwtConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOidcJwtConfiguration` <a name="ResetOidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resetOidcJwtConfiguration"></a>

```go
func ResetOidcJwtConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfiguration">OidcJwtConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfigurationInput">OidcJwtConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OidcJwtConfiguration`<sup>Required</sup> <a name="OidcJwtConfiguration" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfiguration"></a>

```go
func OidcJwtConfiguration() SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList</a>

---

##### `OidcJwtConfigurationInput`<sup>Optional</sup> <a name="OidcJwtConfigurationInput" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfigurationInput"></a>

```go
func OidcJwtConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



