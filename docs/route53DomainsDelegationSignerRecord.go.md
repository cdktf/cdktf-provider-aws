# `route53DomainsDelegationSignerRecord` Submodule <a name="`route53DomainsDelegationSignerRecord` Submodule" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsDelegationSignerRecord <a name="Route53DomainsDelegationSignerRecord" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record aws_route53domains_delegation_signer_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

route53domainsdelegationsignerrecord.NewRoute53DomainsDelegationSignerRecord(scope Construct, id *string, config Route53DomainsDelegationSignerRecordConfig) Route53DomainsDelegationSignerRecord
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig">Route53DomainsDelegationSignerRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig">Route53DomainsDelegationSignerRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putSigningAttributes">PutSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetSigningAttributes">ResetSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSigningAttributes` <a name="PutSigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putSigningAttributes"></a>

```go
func PutSigningAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putSigningAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putTimeouts"></a>

```go
func PutTimeouts(value Route53DomainsDelegationSignerRecordTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

---

##### `ResetSigningAttributes` <a name="ResetSigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetSigningAttributes"></a>

```go
func ResetSigningAttributes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Route53DomainsDelegationSignerRecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

route53domainsdelegationsignerrecord.Route53DomainsDelegationSignerRecord_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

route53domainsdelegationsignerrecord.Route53DomainsDelegationSignerRecord_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

route53domainsdelegationsignerrecord.Route53DomainsDelegationSignerRecord_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

route53domainsdelegationsignerrecord.Route53DomainsDelegationSignerRecord_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Route53DomainsDelegationSignerRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53DomainsDelegationSignerRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53DomainsDelegationSignerRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Route53DomainsDelegationSignerRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dnssecKeyId">DnssecKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributes">SigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList">Route53DomainsDelegationSignerRecordSigningAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference">Route53DomainsDelegationSignerRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributesInput">SigningAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnssecKeyId`<sup>Required</sup> <a name="DnssecKeyId" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.dnssecKeyId"></a>

```go
func DnssecKeyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SigningAttributes`<sup>Required</sup> <a name="SigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributes"></a>

```go
func SigningAttributes() Route53DomainsDelegationSignerRecordSigningAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList">Route53DomainsDelegationSignerRecordSigningAttributesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeouts"></a>

```go
func Timeouts() Route53DomainsDelegationSignerRecordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference">Route53DomainsDelegationSignerRecordTimeoutsOutputReference</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `SigningAttributesInput`<sup>Optional</sup> <a name="SigningAttributesInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.signingAttributesInput"></a>

```go
func SigningAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecord.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsDelegationSignerRecordConfig <a name="Route53DomainsDelegationSignerRecordConfig" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

&route53domainsdelegationsignerrecord.Route53DomainsDelegationSignerRecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	SigningAttributes: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#domain_name Route53DomainsDelegationSignerRecord#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.signingAttributes">SigningAttributes</a></code> | <code>interface{}</code> | signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#domain_name Route53DomainsDelegationSignerRecord#domain_name}.

---

##### `SigningAttributes`<sup>Optional</sup> <a name="SigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.signingAttributes"></a>

```go
SigningAttributes interface{}
```

- *Type:* interface{}

signing_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#signing_attributes Route53DomainsDelegationSignerRecord#signing_attributes}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordConfig.property.timeouts"></a>

```go
Timeouts Route53DomainsDelegationSignerRecordTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts">Route53DomainsDelegationSignerRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#timeouts Route53DomainsDelegationSignerRecord#timeouts}

---

### Route53DomainsDelegationSignerRecordSigningAttributes <a name="Route53DomainsDelegationSignerRecordSigningAttributes" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

&route53domainsdelegationsignerrecord.Route53DomainsDelegationSignerRecordSigningAttributes {
	Algorithm: *f64,
	Flags: *f64,
	PublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.algorithm">Algorithm</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#algorithm Route53DomainsDelegationSignerRecord#algorithm}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.flags">Flags</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#flags Route53DomainsDelegationSignerRecord#flags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.publicKey">PublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#public_key Route53DomainsDelegationSignerRecord#public_key}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.algorithm"></a>

```go
Algorithm *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#algorithm Route53DomainsDelegationSignerRecord#algorithm}.

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.flags"></a>

```go
Flags *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#flags Route53DomainsDelegationSignerRecord#flags}.

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributes.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#public_key Route53DomainsDelegationSignerRecord#public_key}.

---

### Route53DomainsDelegationSignerRecordTimeouts <a name="Route53DomainsDelegationSignerRecordTimeouts" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

&route53domainsdelegationsignerrecord.Route53DomainsDelegationSignerRecordTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#create Route53DomainsDelegationSignerRecord#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/route53domains_delegation_signer_record#delete Route53DomainsDelegationSignerRecord#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsDelegationSignerRecordSigningAttributesList <a name="Route53DomainsDelegationSignerRecordSigningAttributesList" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

route53domainsdelegationsignerrecord.NewRoute53DomainsDelegationSignerRecordSigningAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53DomainsDelegationSignerRecordSigningAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.get"></a>

```go
func Get(index *f64) Route53DomainsDelegationSignerRecordSigningAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDelegationSignerRecordSigningAttributesOutputReference <a name="Route53DomainsDelegationSignerRecordSigningAttributesOutputReference" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

route53domainsdelegationsignerrecord.NewRoute53DomainsDelegationSignerRecordSigningAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53DomainsDelegationSignerRecordSigningAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flagsInput">FlagsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithm">Algorithm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flags">Flags</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *f64
```

- *Type:* *f64

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flagsInput"></a>

```go
func FlagsInput() *f64
```

- *Type:* *f64

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.algorithm"></a>

```go
func Algorithm() *f64
```

- *Type:* *f64

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.flags"></a>

```go
func Flags() *f64
```

- *Type:* *f64

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordSigningAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53DomainsDelegationSignerRecordTimeoutsOutputReference <a name="Route53DomainsDelegationSignerRecordTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/route53domainsdelegationsignerrecord"

route53domainsdelegationsignerrecord.NewRoute53DomainsDelegationSignerRecordTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53DomainsDelegationSignerRecordTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsDelegationSignerRecord.Route53DomainsDelegationSignerRecordTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



