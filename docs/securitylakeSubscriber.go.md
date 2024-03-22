# `securitylakeSubscriber` Submodule <a name="`securitylakeSubscriber` Submodule" id="@cdktf/provider-aws.securitylakeSubscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriber <a name="SecuritylakeSubscriber" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriber(scope Construct, id *string, config SecuritylakeSubscriberConfig) SecuritylakeSubscriber
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig">SecuritylakeSubscriberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig">SecuritylakeSubscriberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity">PutSubscriberIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription">ResetSubscriberDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity">ResetSubscriberIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName">ResetSubscriberName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource"></a>

```go
func PutSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSubscriberIdentity` <a name="PutSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity"></a>

```go
func PutSubscriberIdentity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts"></a>

```go
func PutTimeouts(value SecuritylakeSubscriberTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType"></a>

```go
func ResetAccessType()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSubscriberDescription` <a name="ResetSubscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription"></a>

```go
func ResetSubscriberDescription()
```

##### `ResetSubscriberIdentity` <a name="ResetSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity"></a>

```go
func ResetSubscriberIdentity()
```

##### `ResetSubscriberName` <a name="ResetSubscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName"></a>

```go
func ResetSubscriberName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.SecuritylakeSubscriber_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.SecuritylakeSubscriber_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.SecuritylakeSubscriber_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.SecuritylakeSubscriber_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecuritylakeSubscriber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecuritylakeSubscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn">ResourceShareArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName">ResourceShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint">SubscriberEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity">SubscriberIdentity</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus">SubscriberStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput">SubscriberDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput">SubscriberIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput">SubscriberNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription">SubscriberDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName">SubscriberName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn"></a>

```go
func ResourceShareArn() *string
```

- *Type:* *string

---

##### `ResourceShareName`<sup>Required</sup> <a name="ResourceShareName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName"></a>

```go
func ResourceShareName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn"></a>

```go
func S3BucketArn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source"></a>

```go
func Source() SecuritylakeSubscriberSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a>

---

##### `SubscriberEndpoint`<sup>Required</sup> <a name="SubscriberEndpoint" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint"></a>

```go
func SubscriberEndpoint() *string
```

- *Type:* *string

---

##### `SubscriberIdentity`<sup>Required</sup> <a name="SubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity"></a>

```go
func SubscriberIdentity() SecuritylakeSubscriberSubscriberIdentityList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a>

---

##### `SubscriberStatus`<sup>Required</sup> <a name="SubscriberStatus" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus"></a>

```go
func SubscriberStatus() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts"></a>

```go
func Timeouts() SecuritylakeSubscriberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a>

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriberDescriptionInput`<sup>Optional</sup> <a name="SubscriberDescriptionInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput"></a>

```go
func SubscriberDescriptionInput() *string
```

- *Type:* *string

---

##### `SubscriberIdentityInput`<sup>Optional</sup> <a name="SubscriberIdentityInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput"></a>

```go
func SubscriberIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriberNameInput`<sup>Optional</sup> <a name="SubscriberNameInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput"></a>

```go
func SubscriberNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `SubscriberDescription`<sup>Required</sup> <a name="SubscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription"></a>

```go
func SubscriberDescription() *string
```

- *Type:* *string

---

##### `SubscriberName`<sup>Required</sup> <a name="SubscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName"></a>

```go
func SubscriberName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberConfig <a name="SecuritylakeSubscriberConfig" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

&securitylakesubscriber.SecuritylakeSubscriberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessType: *string,
	Source: interface{},
	SubscriberDescription: *string,
	SubscriberIdentity: interface{},
	SubscriberName: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType">AccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source">Source</a></code> | <code>interface{}</code> | source block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription">SubscriberDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity">SubscriberIdentity</a></code> | <code>interface{}</code> | subscriber_identity block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName">SubscriberName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source SecuritylakeSubscriber#source}

---

##### `SubscriberDescription`<sup>Optional</sup> <a name="SubscriberDescription" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription"></a>

```go
SubscriberDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}.

---

##### `SubscriberIdentity`<sup>Optional</sup> <a name="SubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity"></a>

```go
SubscriberIdentity interface{}
```

- *Type:* interface{}

subscriber_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_identity SecuritylakeSubscriber#subscriber_identity}

---

##### `SubscriberName`<sup>Optional</sup> <a name="SubscriberName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName"></a>

```go
SubscriberName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts"></a>

```go
Timeouts SecuritylakeSubscriberTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#timeouts SecuritylakeSubscriber#timeouts}

---

### SecuritylakeSubscriberSource <a name="SecuritylakeSubscriberSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

&securitylakesubscriber.SecuritylakeSubscriberSource {
	AwsLogSourceResource: interface{},
	CustomLogSourceResource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource">AwsLogSourceResource</a></code> | <code>interface{}</code> | aws_log_source_resource block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource">CustomLogSourceResource</a></code> | <code>interface{}</code> | custom_log_source_resource block. |

---

##### `AwsLogSourceResource`<sup>Optional</sup> <a name="AwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource"></a>

```go
AwsLogSourceResource interface{}
```

- *Type:* interface{}

aws_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#aws_log_source_resource SecuritylakeSubscriber#aws_log_source_resource}

---

##### `CustomLogSourceResource`<sup>Optional</sup> <a name="CustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource"></a>

```go
CustomLogSourceResource interface{}
```

- *Type:* interface{}

custom_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#custom_log_source_resource SecuritylakeSubscriber#custom_log_source_resource}

---

### SecuritylakeSubscriberSourceAwsLogSourceResource <a name="SecuritylakeSubscriberSourceAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

&securitylakesubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource {
	SourceName: *string,
	SourceVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName">SourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `SourceVersion`<sup>Optional</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion"></a>

```go
SourceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResource <a name="SecuritylakeSubscriberSourceCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

&securitylakesubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource {
	SourceName: *string,
	SourceVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName">SourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `SourceVersion`<sup>Optional</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion"></a>

```go
SourceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

&securitylakesubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes {

}
```


### SecuritylakeSubscriberSourceCustomLogSourceResourceProvider <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProvider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

&securitylakesubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider {

}
```


### SecuritylakeSubscriberSubscriberIdentity <a name="SecuritylakeSubscriberSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

&securitylakesubscriber.SecuritylakeSubscriberSubscriberIdentity {
	ExternalId: *string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}.

---

### SecuritylakeSubscriberTimeouts <a name="SecuritylakeSubscriberTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

&securitylakesubscriber.SecuritylakeSubscriberTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#create SecuritylakeSubscriber#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#delete SecuritylakeSubscriber#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber#update SecuritylakeSubscriber#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberSourceAwsLogSourceResourceList <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceAwsLogSourceResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeSubscriberSourceAwsLogSourceResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get"></a>

```go
func Get(index *f64) SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion">ResetSourceVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceName"></a>

```go
func ResetSourceName()
```

##### `ResetSourceVersion` <a name="ResetSourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion"></a>

```go
func ResetSourceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput">SourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```go
func SourceVersionInput() *string
```

- *Type:* *string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion"></a>

```go
func SourceVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get"></a>

```go
func Get(index *f64) SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn">CrawlerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn">DatabaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn">TableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrawlerArn`<sup>Required</sup> <a name="CrawlerArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn"></a>

```go
func CrawlerArn() *string
```

- *Type:* *string

---

##### `DatabaseArn`<sup>Required</sup> <a name="DatabaseArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn"></a>

```go
func DatabaseArn() *string
```

- *Type:* *string

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn"></a>

```go
func TableArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceCustomLogSourceResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeSubscriberSourceCustomLogSourceResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get"></a>

```go
func Get(index *f64) SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion">ResetSourceVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceName"></a>

```go
func ResetSourceName()
```

##### `ResetSourceVersion` <a name="ResetSourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion"></a>

```go
func ResetSourceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider">Provider</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput">SourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes"></a>

```go
func Attributes() SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a>

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider"></a>

```go
func Provider() SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a>

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```go
func SourceVersionInput() *string
```

- *Type:* *string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion"></a>

```go
func SourceVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceCustomLogSourceResourceProviderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get"></a>

```go
func Get(index *f64) SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() SecuritylakeSubscriberSourceCustomLogSourceResourceProvider
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a>

---


### SecuritylakeSubscriberSourceList <a name="SecuritylakeSubscriberSourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeSubscriberSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get"></a>

```go
func Get(index *f64) SecuritylakeSubscriberSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberSourceOutputReference <a name="SecuritylakeSubscriberSourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeSubscriberSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource">PutAwsLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource">PutCustomLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource">ResetAwsLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource">ResetCustomLogSourceResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsLogSourceResource` <a name="PutAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource"></a>

```go
func PutAwsLogSourceResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomLogSourceResource` <a name="PutCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource"></a>

```go
func PutCustomLogSourceResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsLogSourceResource` <a name="ResetAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource"></a>

```go
func ResetAwsLogSourceResource()
```

##### `ResetCustomLogSourceResource` <a name="ResetCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource"></a>

```go
func ResetCustomLogSourceResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource">AwsLogSourceResource</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource">CustomLogSourceResource</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput">AwsLogSourceResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput">CustomLogSourceResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsLogSourceResource`<sup>Required</sup> <a name="AwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource"></a>

```go
func AwsLogSourceResource() SecuritylakeSubscriberSourceAwsLogSourceResourceList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a>

---

##### `CustomLogSourceResource`<sup>Required</sup> <a name="CustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource"></a>

```go
func CustomLogSourceResource() SecuritylakeSubscriberSourceCustomLogSourceResourceList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a>

---

##### `AwsLogSourceResourceInput`<sup>Optional</sup> <a name="AwsLogSourceResourceInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput"></a>

```go
func AwsLogSourceResourceInput() interface{}
```

- *Type:* interface{}

---

##### `CustomLogSourceResourceInput`<sup>Optional</sup> <a name="CustomLogSourceResourceInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput"></a>

```go
func CustomLogSourceResourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberSubscriberIdentityList <a name="SecuritylakeSubscriberSubscriberIdentityList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSubscriberIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeSubscriberSubscriberIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get"></a>

```go
func Get(index *f64) SecuritylakeSubscriberSubscriberIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberSubscriberIdentityOutputReference <a name="SecuritylakeSubscriberSubscriberIdentityOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberSubscriberIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeSubscriberSubscriberIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberTimeoutsOutputReference <a name="SecuritylakeSubscriberTimeoutsOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakesubscriber"

securitylakesubscriber.NewSecuritylakeSubscriberTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecuritylakeSubscriberTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



