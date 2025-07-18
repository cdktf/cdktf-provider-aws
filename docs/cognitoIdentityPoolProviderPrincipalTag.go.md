# `cognitoIdentityPoolProviderPrincipalTag` Submodule <a name="`cognitoIdentityPoolProviderPrincipalTag` Submodule" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolProviderPrincipalTag <a name="CognitoIdentityPoolProviderPrincipalTag" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cognitoidentitypoolproviderprincipaltag"

cognitoidentitypoolproviderprincipaltag.NewCognitoIdentityPoolProviderPrincipalTag(scope Construct, id *string, config CognitoIdentityPoolProviderPrincipalTagConfig) CognitoIdentityPoolProviderPrincipalTag
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig">CognitoIdentityPoolProviderPrincipalTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig">CognitoIdentityPoolProviderPrincipalTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetPrincipalTags">ResetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetUseDefaults">ResetUseDefaults</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalTags` <a name="ResetPrincipalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetPrincipalTags"></a>

```go
func ResetPrincipalTags()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetUseDefaults` <a name="ResetUseDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetUseDefaults"></a>

```go
func ResetUseDefaults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoIdentityPoolProviderPrincipalTag resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cognitoidentitypoolproviderprincipaltag"

cognitoidentitypoolproviderprincipaltag.CognitoIdentityPoolProviderPrincipalTag_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cognitoidentitypoolproviderprincipaltag"

cognitoidentitypoolproviderprincipaltag.CognitoIdentityPoolProviderPrincipalTag_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cognitoidentitypoolproviderprincipaltag"

cognitoidentitypoolproviderprincipaltag.CognitoIdentityPoolProviderPrincipalTag_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cognitoidentitypoolproviderprincipaltag"

cognitoidentitypoolproviderprincipaltag.CognitoIdentityPoolProviderPrincipalTag_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CognitoIdentityPoolProviderPrincipalTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CognitoIdentityPoolProviderPrincipalTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CognitoIdentityPoolProviderPrincipalTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPoolProviderPrincipalTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderNameInput">IdentityProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTagsInput">PrincipalTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaultsInput">UseDefaultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderName">IdentityProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTags">PrincipalTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaults">UseDefaults</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolIdInput"></a>

```go
func IdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `IdentityProviderNameInput`<sup>Optional</sup> <a name="IdentityProviderNameInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderNameInput"></a>

```go
func IdentityProviderNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTagsInput`<sup>Optional</sup> <a name="PrincipalTagsInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTagsInput"></a>

```go
func PrincipalTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UseDefaultsInput`<sup>Optional</sup> <a name="UseDefaultsInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaultsInput"></a>

```go
func UseDefaultsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `IdentityProviderName`<sup>Required</sup> <a name="IdentityProviderName" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderName"></a>

```go
func IdentityProviderName() *string
```

- *Type:* *string

---

##### `PrincipalTags`<sup>Required</sup> <a name="PrincipalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTags"></a>

```go
func PrincipalTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `UseDefaults`<sup>Required</sup> <a name="UseDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaults"></a>

```go
func UseDefaults() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolProviderPrincipalTagConfig <a name="CognitoIdentityPoolProviderPrincipalTagConfig" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cognitoidentitypoolproviderprincipaltag"

&cognitoidentitypoolproviderprincipaltag.CognitoIdentityPoolProviderPrincipalTagConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdentityPoolId: *string,
	IdentityProviderName: *string,
	Id: *string,
	PrincipalTags: *map[string]*string,
	Region: *string,
	UseDefaults: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityProviderName">IdentityProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.principalTags">PrincipalTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.useDefaults">UseDefaults</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityPoolId"></a>

```go
IdentityPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}.

---

##### `IdentityProviderName`<sup>Required</sup> <a name="IdentityProviderName" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityProviderName"></a>

```go
IdentityProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalTags`<sup>Optional</sup> <a name="PrincipalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.principalTags"></a>

```go
PrincipalTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#region CognitoIdentityPoolProviderPrincipalTag#region}

---

##### `UseDefaults`<sup>Optional</sup> <a name="UseDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.useDefaults"></a>

```go
UseDefaults interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}.

---



