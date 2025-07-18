# `route53RecoveryreadinessRecoveryGroup` Submodule <a name="`route53RecoveryreadinessRecoveryGroup` Submodule" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessRecoveryGroup <a name="Route53RecoveryreadinessRecoveryGroup" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group aws_route53recoveryreadiness_recovery_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recoveryreadinessrecoverygroup"

route53recoveryreadinessrecoverygroup.NewRoute53RecoveryreadinessRecoveryGroup(scope Construct, id *string, config Route53RecoveryreadinessRecoveryGroupConfig) Route53RecoveryreadinessRecoveryGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig">Route53RecoveryreadinessRecoveryGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig">Route53RecoveryreadinessRecoveryGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetCells">ResetCells</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTimeouts"></a>

```go
func PutTimeouts(value Route53RecoveryreadinessRecoveryGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>

---

##### `ResetCells` <a name="ResetCells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetCells"></a>

```go
func ResetCells()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Route53RecoveryreadinessRecoveryGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recoveryreadinessrecoverygroup"

route53recoveryreadinessrecoverygroup.Route53RecoveryreadinessRecoveryGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recoveryreadinessrecoverygroup"

route53recoveryreadinessrecoverygroup.Route53RecoveryreadinessRecoveryGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recoveryreadinessrecoverygroup"

route53recoveryreadinessrecoverygroup.Route53RecoveryreadinessRecoveryGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recoveryreadinessrecoverygroup"

route53recoveryreadinessrecoverygroup.Route53RecoveryreadinessRecoveryGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Route53RecoveryreadinessRecoveryGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53RecoveryreadinessRecoveryGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53RecoveryreadinessRecoveryGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Route53RecoveryreadinessRecoveryGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference">Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cellsInput">CellsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupNameInput">RecoveryGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cells">Cells</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupName">RecoveryGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeouts"></a>

```go
func Timeouts() Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference">Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference</a>

---

##### `CellsInput`<sup>Optional</sup> <a name="CellsInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cellsInput"></a>

```go
func CellsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RecoveryGroupNameInput`<sup>Optional</sup> <a name="RecoveryGroupNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupNameInput"></a>

```go
func RecoveryGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Cells`<sup>Required</sup> <a name="Cells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cells"></a>

```go
func Cells() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RecoveryGroupName`<sup>Required</sup> <a name="RecoveryGroupName" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupName"></a>

```go
func RecoveryGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessRecoveryGroupConfig <a name="Route53RecoveryreadinessRecoveryGroupConfig" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recoveryreadinessrecoverygroup"

&route53recoveryreadinessrecoverygroup.Route53RecoveryreadinessRecoveryGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RecoveryGroupName: *string,
	Cells: *[]*string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.recoveryGroupName">RecoveryGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.cells">Cells</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#id Route53RecoveryreadinessRecoveryGroup#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RecoveryGroupName`<sup>Required</sup> <a name="RecoveryGroupName" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.recoveryGroupName"></a>

```go
RecoveryGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}.

---

##### `Cells`<sup>Optional</sup> <a name="Cells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.cells"></a>

```go
Cells *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#id Route53RecoveryreadinessRecoveryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.timeouts"></a>

```go
Timeouts Route53RecoveryreadinessRecoveryGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#timeouts Route53RecoveryreadinessRecoveryGroup#timeouts}

---

### Route53RecoveryreadinessRecoveryGroupTimeouts <a name="Route53RecoveryreadinessRecoveryGroupTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recoveryreadinessrecoverygroup"

&route53recoveryreadinessrecoverygroup.Route53RecoveryreadinessRecoveryGroupTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#delete Route53RecoveryreadinessRecoveryGroup#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53recoveryreadiness_recovery_group#delete Route53RecoveryreadinessRecoveryGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference <a name="Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recoveryreadinessrecoverygroup"

route53recoveryreadinessrecoverygroup.NewRoute53RecoveryreadinessRecoveryGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



