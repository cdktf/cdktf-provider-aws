# `route53RecordsExclusive` Submodule <a name="`route53RecordsExclusive` Submodule" id="@cdktf/provider-aws.route53RecordsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecordsExclusive <a name="Route53RecordsExclusive" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive aws_route53_records_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusive(scope Construct, id *string, config Route53RecordsExclusiveConfig) Route53RecordsExclusive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig">Route53RecordsExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig">Route53RecordsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet">PutResourceRecordSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetResourceRecordSet">ResetResourceRecordSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceRecordSet` <a name="PutResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet"></a>

```go
func PutResourceRecordSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts"></a>

```go
func PutTimeouts(value Route53RecordsExclusiveTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

---

##### `ResetResourceRecordSet` <a name="ResetResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetResourceRecordSet"></a>

```go
func ResetResourceRecordSet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Route53RecordsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.Route53RecordsExclusive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.Route53RecordsExclusive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.Route53RecordsExclusive_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.Route53RecordsExclusive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Route53RecordsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53RecordsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53RecordsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Route53RecordsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSet">ResourceRecordSet</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList">Route53RecordsExclusiveResourceRecordSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference">Route53RecordsExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSetInput">ResourceRecordSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceRecordSet`<sup>Required</sup> <a name="ResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSet"></a>

```go
func ResourceRecordSet() Route53RecordsExclusiveResourceRecordSetList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList">Route53RecordsExclusiveResourceRecordSetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeouts"></a>

```go
func Timeouts() Route53RecordsExclusiveTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference">Route53RecordsExclusiveTimeoutsOutputReference</a>

---

##### `ResourceRecordSetInput`<sup>Optional</sup> <a name="ResourceRecordSetInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSetInput"></a>

```go
func ResourceRecordSetInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordsExclusiveConfig <a name="Route53RecordsExclusiveConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

&route53recordsexclusive.Route53RecordsExclusiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	ResourceRecordSet: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.route53RecordsExclusive.Route53RecordsExclusiveTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.resourceRecordSet">ResourceRecordSet</a></code> | <code>interface{}</code> | resource_record_set block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}.

---

##### `ResourceRecordSet`<sup>Optional</sup> <a name="ResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.resourceRecordSet"></a>

```go
ResourceRecordSet interface{}
```

- *Type:* interface{}

resource_record_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#resource_record_set Route53RecordsExclusive#resource_record_set}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.timeouts"></a>

```go
Timeouts Route53RecordsExclusiveTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#timeouts Route53RecordsExclusive#timeouts}

---

### Route53RecordsExclusiveResourceRecordSet <a name="Route53RecordsExclusiveResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

&route53recordsexclusive.Route53RecordsExclusiveResourceRecordSet {
	Name: *string,
	AliasTarget: interface{},
	CidrRoutingConfig: interface{},
	Failover: *string,
	Geolocation: interface{},
	GeoproximityLocation: interface{},
	HealthCheckId: *string,
	MultiValueAnswer: interface{},
	Region: *string,
	ResourceRecords: interface{},
	SetIdentifier: *string,
	TrafficPolicyInstanceId: *string,
	Ttl: *f64,
	Type: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#name Route53RecordsExclusive#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.aliasTarget">AliasTarget</a></code> | <code>interface{}</code> | alias_target block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.cidrRoutingConfig">CidrRoutingConfig</a></code> | <code>interface{}</code> | cidr_routing_config block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.failover">Failover</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#failover Route53RecordsExclusive#failover}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geolocation">Geolocation</a></code> | <code>interface{}</code> | geolocation block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geoproximityLocation">GeoproximityLocation</a></code> | <code>interface{}</code> | geoproximity_location block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.healthCheckId">HealthCheckId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#health_check_id Route53RecordsExclusive#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.multiValueAnswer">MultiValueAnswer</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#multi_value_answer Route53RecordsExclusive#multi_value_answer}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#region Route53RecordsExclusive#region}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.resourceRecords">ResourceRecords</a></code> | <code>interface{}</code> | resource_records block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.setIdentifier">SetIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#set_identifier Route53RecordsExclusive#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.trafficPolicyInstanceId">TrafficPolicyInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id Route53RecordsExclusive#traffic_policy_instance_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#ttl Route53RecordsExclusive#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#type Route53RecordsExclusive#type}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#weight Route53RecordsExclusive#weight}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#name Route53RecordsExclusive#name}.

---

##### `AliasTarget`<sup>Optional</sup> <a name="AliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.aliasTarget"></a>

```go
AliasTarget interface{}
```

- *Type:* interface{}

alias_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#alias_target Route53RecordsExclusive#alias_target}

---

##### `CidrRoutingConfig`<sup>Optional</sup> <a name="CidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.cidrRoutingConfig"></a>

```go
CidrRoutingConfig interface{}
```

- *Type:* interface{}

cidr_routing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#cidr_routing_config Route53RecordsExclusive#cidr_routing_config}

---

##### `Failover`<sup>Optional</sup> <a name="Failover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.failover"></a>

```go
Failover *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#failover Route53RecordsExclusive#failover}.

---

##### `Geolocation`<sup>Optional</sup> <a name="Geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geolocation"></a>

```go
Geolocation interface{}
```

- *Type:* interface{}

geolocation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#geolocation Route53RecordsExclusive#geolocation}

---

##### `GeoproximityLocation`<sup>Optional</sup> <a name="GeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geoproximityLocation"></a>

```go
GeoproximityLocation interface{}
```

- *Type:* interface{}

geoproximity_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#geoproximity_location Route53RecordsExclusive#geoproximity_location}

---

##### `HealthCheckId`<sup>Optional</sup> <a name="HealthCheckId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.healthCheckId"></a>

```go
HealthCheckId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#health_check_id Route53RecordsExclusive#health_check_id}.

---

##### `MultiValueAnswer`<sup>Optional</sup> <a name="MultiValueAnswer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.multiValueAnswer"></a>

```go
MultiValueAnswer interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#multi_value_answer Route53RecordsExclusive#multi_value_answer}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#region Route53RecordsExclusive#region}.

---

##### `ResourceRecords`<sup>Optional</sup> <a name="ResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.resourceRecords"></a>

```go
ResourceRecords interface{}
```

- *Type:* interface{}

resource_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#resource_records Route53RecordsExclusive#resource_records}

---

##### `SetIdentifier`<sup>Optional</sup> <a name="SetIdentifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.setIdentifier"></a>

```go
SetIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#set_identifier Route53RecordsExclusive#set_identifier}.

---

##### `TrafficPolicyInstanceId`<sup>Optional</sup> <a name="TrafficPolicyInstanceId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.trafficPolicyInstanceId"></a>

```go
TrafficPolicyInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id Route53RecordsExclusive#traffic_policy_instance_id}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#ttl Route53RecordsExclusive#ttl}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#type Route53RecordsExclusive#type}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#weight Route53RecordsExclusive#weight}.

---

### Route53RecordsExclusiveResourceRecordSetAliasTarget <a name="Route53RecordsExclusiveResourceRecordSetAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

&route53recordsexclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget {
	DnsName: *string,
	EvaluateTargetHealth: interface{},
	HostedZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.dnsName">DnsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#dns_name Route53RecordsExclusive#dns_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.evaluateTargetHealth">EvaluateTargetHealth</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#evaluate_target_health Route53RecordsExclusive#evaluate_target_health}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#hosted_zone_id Route53RecordsExclusive#hosted_zone_id}. |

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.dnsName"></a>

```go
DnsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#dns_name Route53RecordsExclusive#dns_name}.

---

##### `EvaluateTargetHealth`<sup>Required</sup> <a name="EvaluateTargetHealth" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.evaluateTargetHealth"></a>

```go
EvaluateTargetHealth interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#evaluate_target_health Route53RecordsExclusive#evaluate_target_health}.

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.hostedZoneId"></a>

```go
HostedZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#hosted_zone_id Route53RecordsExclusive#hosted_zone_id}.

---

### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

&route53recordsexclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig {
	CollectionId: *string,
	LocationName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#collection_id Route53RecordsExclusive#collection_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.locationName">LocationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#location_name Route53RecordsExclusive#location_name}. |

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#collection_id Route53RecordsExclusive#collection_id}.

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.locationName"></a>

```go
LocationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#location_name Route53RecordsExclusive#location_name}.

---

### Route53RecordsExclusiveResourceRecordSetGeolocation <a name="Route53RecordsExclusiveResourceRecordSetGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

&route53recordsexclusive.Route53RecordsExclusiveResourceRecordSetGeolocation {
	ContinentCode: *string,
	CountryCode: *string,
	SubdivisionCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.continentCode">ContinentCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#continent_code Route53RecordsExclusive#continent_code}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#country_code Route53RecordsExclusive#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.subdivisionCode">SubdivisionCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#subdivision_code Route53RecordsExclusive#subdivision_code}. |

---

##### `ContinentCode`<sup>Optional</sup> <a name="ContinentCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.continentCode"></a>

```go
ContinentCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#continent_code Route53RecordsExclusive#continent_code}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#country_code Route53RecordsExclusive#country_code}.

---

##### `SubdivisionCode`<sup>Optional</sup> <a name="SubdivisionCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.subdivisionCode"></a>

```go
SubdivisionCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#subdivision_code Route53RecordsExclusive#subdivision_code}.

---

### Route53RecordsExclusiveResourceRecordSetGeoproximityLocation <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

&route53recordsexclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation {
	AwsRegion: *string,
	Bias: *f64,
	Coordinates: interface{},
	LocalZoneGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#aws_region Route53RecordsExclusive#aws_region}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.bias">Bias</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#bias Route53RecordsExclusive#bias}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.coordinates">Coordinates</a></code> | <code>interface{}</code> | coordinates block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.localZoneGroup">LocalZoneGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#local_zone_group Route53RecordsExclusive#local_zone_group}. |

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#aws_region Route53RecordsExclusive#aws_region}.

---

##### `Bias`<sup>Optional</sup> <a name="Bias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.bias"></a>

```go
Bias *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#bias Route53RecordsExclusive#bias}.

---

##### `Coordinates`<sup>Optional</sup> <a name="Coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.coordinates"></a>

```go
Coordinates interface{}
```

- *Type:* interface{}

coordinates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#coordinates Route53RecordsExclusive#coordinates}

---

##### `LocalZoneGroup`<sup>Optional</sup> <a name="LocalZoneGroup" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.localZoneGroup"></a>

```go
LocalZoneGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#local_zone_group Route53RecordsExclusive#local_zone_group}.

---

### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

&route53recordsexclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates {
	Latitude: *string,
	Longitude: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.latitude">Latitude</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#latitude Route53RecordsExclusive#latitude}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.longitude">Longitude</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#longitude Route53RecordsExclusive#longitude}. |

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.latitude"></a>

```go
Latitude *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#latitude Route53RecordsExclusive#latitude}.

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.longitude"></a>

```go
Longitude *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#longitude Route53RecordsExclusive#longitude}.

---

### Route53RecordsExclusiveResourceRecordSetResourceRecords <a name="Route53RecordsExclusiveResourceRecordSetResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

&route53recordsexclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#value Route53RecordsExclusive#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#value Route53RecordsExclusive#value}.

---

### Route53RecordsExclusiveTimeouts <a name="Route53RecordsExclusiveTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

&route53recordsexclusive.Route53RecordsExclusiveTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#create Route53RecordsExclusive#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/route53_records_exclusive#update Route53RecordsExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordsExclusiveResourceRecordSetAliasTargetList <a name="Route53RecordsExclusiveResourceRecordSetAliasTargetList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetAliasTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53RecordsExclusiveResourceRecordSetAliasTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get"></a>

```go
func Get(index *f64) Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference <a name="Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetAliasTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsNameInput">DnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput">EvaluateTargetHealthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealth">EvaluateTargetHealth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsNameInput"></a>

```go
func DnsNameInput() *string
```

- *Type:* *string

---

##### `EvaluateTargetHealthInput`<sup>Optional</sup> <a name="EvaluateTargetHealthInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput"></a>

```go
func EvaluateTargetHealthInput() interface{}
```

- *Type:* interface{}

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneIdInput"></a>

```go
func HostedZoneIdInput() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `EvaluateTargetHealth`<sup>Required</sup> <a name="EvaluateTargetHealth" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```go
func EvaluateTargetHealth() interface{}
```

- *Type:* interface{}

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetCidrRoutingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get"></a>

```go
func Get(index *f64) Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationNameInput">LocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `LocationNameInput`<sup>Optional</sup> <a name="LocationNameInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationNameInput"></a>

```go
func LocationNameInput() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetGeolocationList <a name="Route53RecordsExclusiveResourceRecordSetGeolocationList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetGeolocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53RecordsExclusiveResourceRecordSetGeolocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get"></a>

```go
func Get(index *f64) Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetGeolocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetContinentCode">ResetContinentCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetSubdivisionCode">ResetSubdivisionCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinentCode` <a name="ResetContinentCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetContinentCode"></a>

```go
func ResetContinentCode()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetSubdivisionCode` <a name="ResetSubdivisionCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetSubdivisionCode"></a>

```go
func ResetSubdivisionCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCodeInput">ContinentCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCodeInput">SubdivisionCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCode">ContinentCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCode">SubdivisionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinentCodeInput`<sup>Optional</sup> <a name="ContinentCodeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCodeInput"></a>

```go
func ContinentCodeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `SubdivisionCodeInput`<sup>Optional</sup> <a name="SubdivisionCodeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCodeInput"></a>

```go
func SubdivisionCodeInput() *string
```

- *Type:* *string

---

##### `ContinentCode`<sup>Required</sup> <a name="ContinentCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCode"></a>

```go
func ContinentCode() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `SubdivisionCode`<sup>Required</sup> <a name="SubdivisionCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCode"></a>

```go
func SubdivisionCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get"></a>

```go
func Get(index *f64) Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitudeInput">LatitudeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitudeInput">LongitudeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitude">Latitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitude">Longitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatitudeInput`<sup>Optional</sup> <a name="LatitudeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitudeInput"></a>

```go
func LatitudeInput() *string
```

- *Type:* *string

---

##### `LongitudeInput`<sup>Optional</sup> <a name="LongitudeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitudeInput"></a>

```go
func LongitudeInput() *string
```

- *Type:* *string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitude"></a>

```go
func Latitude() *string
```

- *Type:* *string

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitude"></a>

```go
func Longitude() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetGeoproximityLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get"></a>

```go
func Get(index *f64) Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates">PutCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetBias">ResetBias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetCoordinates">ResetCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetLocalZoneGroup">ResetLocalZoneGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCoordinates` <a name="PutCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates"></a>

```go
func PutCoordinates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetAwsRegion"></a>

```go
func ResetAwsRegion()
```

##### `ResetBias` <a name="ResetBias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetBias"></a>

```go
func ResetBias()
```

##### `ResetCoordinates` <a name="ResetCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetCoordinates"></a>

```go
func ResetCoordinates()
```

##### `ResetLocalZoneGroup` <a name="ResetLocalZoneGroup" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetLocalZoneGroup"></a>

```go
func ResetLocalZoneGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinates">Coordinates</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.biasInput">BiasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroupInput">LocalZoneGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.bias">Bias</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroup">LocalZoneGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinates"></a>

```go
func Coordinates() Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `BiasInput`<sup>Optional</sup> <a name="BiasInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.biasInput"></a>

```go
func BiasInput() *f64
```

- *Type:* *f64

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinatesInput"></a>

```go
func CoordinatesInput() interface{}
```

- *Type:* interface{}

---

##### `LocalZoneGroupInput`<sup>Optional</sup> <a name="LocalZoneGroupInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroupInput"></a>

```go
func LocalZoneGroupInput() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `Bias`<sup>Required</sup> <a name="Bias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.bias"></a>

```go
func Bias() *f64
```

- *Type:* *f64

---

##### `LocalZoneGroup`<sup>Required</sup> <a name="LocalZoneGroup" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroup"></a>

```go
func LocalZoneGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetList <a name="Route53RecordsExclusiveResourceRecordSetList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53RecordsExclusiveResourceRecordSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get"></a>

```go
func Get(index *f64) Route53RecordsExclusiveResourceRecordSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetOutputReference <a name="Route53RecordsExclusiveResourceRecordSetOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53RecordsExclusiveResourceRecordSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget">PutAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig">PutCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation">PutGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation">PutGeoproximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords">PutResourceRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetAliasTarget">ResetAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetCidrRoutingConfig">ResetCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetFailover">ResetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeolocation">ResetGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeoproximityLocation">ResetGeoproximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetHealthCheckId">ResetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetMultiValueAnswer">ResetMultiValueAnswer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetResourceRecords">ResetResourceRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetSetIdentifier">ResetSetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTrafficPolicyInstanceId">ResetTrafficPolicyInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAliasTarget` <a name="PutAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget"></a>

```go
func PutAliasTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCidrRoutingConfig` <a name="PutCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig"></a>

```go
func PutCidrRoutingConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGeolocation` <a name="PutGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation"></a>

```go
func PutGeolocation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGeoproximityLocation` <a name="PutGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation"></a>

```go
func PutGeoproximityLocation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceRecords` <a name="PutResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords"></a>

```go
func PutResourceRecords(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAliasTarget` <a name="ResetAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetAliasTarget"></a>

```go
func ResetAliasTarget()
```

##### `ResetCidrRoutingConfig` <a name="ResetCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetCidrRoutingConfig"></a>

```go
func ResetCidrRoutingConfig()
```

##### `ResetFailover` <a name="ResetFailover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetFailover"></a>

```go
func ResetFailover()
```

##### `ResetGeolocation` <a name="ResetGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeolocation"></a>

```go
func ResetGeolocation()
```

##### `ResetGeoproximityLocation` <a name="ResetGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeoproximityLocation"></a>

```go
func ResetGeoproximityLocation()
```

##### `ResetHealthCheckId` <a name="ResetHealthCheckId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetHealthCheckId"></a>

```go
func ResetHealthCheckId()
```

##### `ResetMultiValueAnswer` <a name="ResetMultiValueAnswer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetMultiValueAnswer"></a>

```go
func ResetMultiValueAnswer()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceRecords` <a name="ResetResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetResourceRecords"></a>

```go
func ResetResourceRecords()
```

##### `ResetSetIdentifier` <a name="ResetSetIdentifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetSetIdentifier"></a>

```go
func ResetSetIdentifier()
```

##### `ResetTrafficPolicyInstanceId` <a name="ResetTrafficPolicyInstanceId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTrafficPolicyInstanceId"></a>

```go
func ResetTrafficPolicyInstanceId()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTarget">AliasTarget</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList">Route53RecordsExclusiveResourceRecordSetAliasTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfig">CidrRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocation">Geolocation</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList">Route53RecordsExclusiveResourceRecordSetGeolocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocation">GeoproximityLocation</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecords">ResourceRecords</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList">Route53RecordsExclusiveResourceRecordSetResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTargetInput">AliasTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfigInput">CidrRoutingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failoverInput">FailoverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocationInput">GeolocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocationInput">GeoproximityLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckIdInput">HealthCheckIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswerInput">MultiValueAnswerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecordsInput">ResourceRecordsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifierInput">SetIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceIdInput">TrafficPolicyInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failover">Failover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckId">HealthCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswer">MultiValueAnswer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifier">SetIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceId">TrafficPolicyInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasTarget`<sup>Required</sup> <a name="AliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTarget"></a>

```go
func AliasTarget() Route53RecordsExclusiveResourceRecordSetAliasTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList">Route53RecordsExclusiveResourceRecordSetAliasTargetList</a>

---

##### `CidrRoutingConfig`<sup>Required</sup> <a name="CidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfig"></a>

```go
func CidrRoutingConfig() Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList</a>

---

##### `Geolocation`<sup>Required</sup> <a name="Geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocation"></a>

```go
func Geolocation() Route53RecordsExclusiveResourceRecordSetGeolocationList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList">Route53RecordsExclusiveResourceRecordSetGeolocationList</a>

---

##### `GeoproximityLocation`<sup>Required</sup> <a name="GeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocation"></a>

```go
func GeoproximityLocation() Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList</a>

---

##### `ResourceRecords`<sup>Required</sup> <a name="ResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecords"></a>

```go
func ResourceRecords() Route53RecordsExclusiveResourceRecordSetResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList">Route53RecordsExclusiveResourceRecordSetResourceRecordsList</a>

---

##### `AliasTargetInput`<sup>Optional</sup> <a name="AliasTargetInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTargetInput"></a>

```go
func AliasTargetInput() interface{}
```

- *Type:* interface{}

---

##### `CidrRoutingConfigInput`<sup>Optional</sup> <a name="CidrRoutingConfigInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfigInput"></a>

```go
func CidrRoutingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `FailoverInput`<sup>Optional</sup> <a name="FailoverInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failoverInput"></a>

```go
func FailoverInput() *string
```

- *Type:* *string

---

##### `GeolocationInput`<sup>Optional</sup> <a name="GeolocationInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocationInput"></a>

```go
func GeolocationInput() interface{}
```

- *Type:* interface{}

---

##### `GeoproximityLocationInput`<sup>Optional</sup> <a name="GeoproximityLocationInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocationInput"></a>

```go
func GeoproximityLocationInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckIdInput`<sup>Optional</sup> <a name="HealthCheckIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckIdInput"></a>

```go
func HealthCheckIdInput() *string
```

- *Type:* *string

---

##### `MultiValueAnswerInput`<sup>Optional</sup> <a name="MultiValueAnswerInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswerInput"></a>

```go
func MultiValueAnswerInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceRecordsInput`<sup>Optional</sup> <a name="ResourceRecordsInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecordsInput"></a>

```go
func ResourceRecordsInput() interface{}
```

- *Type:* interface{}

---

##### `SetIdentifierInput`<sup>Optional</sup> <a name="SetIdentifierInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifierInput"></a>

```go
func SetIdentifierInput() *string
```

- *Type:* *string

---

##### `TrafficPolicyInstanceIdInput`<sup>Optional</sup> <a name="TrafficPolicyInstanceIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceIdInput"></a>

```go
func TrafficPolicyInstanceIdInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failover"></a>

```go
func Failover() *string
```

- *Type:* *string

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckId"></a>

```go
func HealthCheckId() *string
```

- *Type:* *string

---

##### `MultiValueAnswer`<sup>Required</sup> <a name="MultiValueAnswer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswer"></a>

```go
func MultiValueAnswer() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SetIdentifier`<sup>Required</sup> <a name="SetIdentifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifier"></a>

```go
func SetIdentifier() *string
```

- *Type:* *string

---

##### `TrafficPolicyInstanceId`<sup>Required</sup> <a name="TrafficPolicyInstanceId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceId"></a>

```go
func TrafficPolicyInstanceId() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetResourceRecordsList <a name="Route53RecordsExclusiveResourceRecordSetResourceRecordsList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetResourceRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53RecordsExclusiveResourceRecordSetResourceRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get"></a>

```go
func Get(index *f64) Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference <a name="Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordsExclusiveTimeoutsOutputReference <a name="Route53RecordsExclusiveTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/route53recordsexclusive"

route53recordsexclusive.NewRoute53RecordsExclusiveTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordsExclusiveTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



