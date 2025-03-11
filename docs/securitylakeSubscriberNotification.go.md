# `securitylakeSubscriberNotification` Submodule <a name="`securitylakeSubscriberNotification` Submodule" id="@cdktf/provider-aws.securitylakeSubscriberNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriberNotification <a name="SecuritylakeSubscriberNotification" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification aws_securitylake_subscriber_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotification(scope Construct, id *string, config SecuritylakeSubscriberNotificationConfig) SecuritylakeSubscriberNotification
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig">SecuritylakeSubscriberNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig">SecuritylakeSubscriberNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetConfiguration">ResetConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putConfiguration"></a>

```go
func PutConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetConfiguration"></a>

```go
func ResetConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeSubscriberNotification resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.SecuritylakeSubscriberNotification_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.SecuritylakeSubscriberNotification_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.SecuritylakeSubscriberNotification_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.SecuritylakeSubscriberNotification_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecuritylakeSubscriberNotification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecuritylakeSubscriberNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecuritylakeSubscriberNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriberNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberEndpoint">SubscriberEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberIdInput">SubscriberIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberId">SubscriberId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.configuration"></a>

```go
func Configuration() SecuritylakeSubscriberNotificationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationList</a>

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubscriberEndpoint`<sup>Required</sup> <a name="SubscriberEndpoint" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberEndpoint"></a>

```go
func SubscriberEndpoint() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriberIdInput`<sup>Optional</sup> <a name="SubscriberIdInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberIdInput"></a>

```go
func SubscriberIdInput() *string
```

- *Type:* *string

---

##### `SubscriberId`<sup>Required</sup> <a name="SubscriberId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberId"></a>

```go
func SubscriberId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberNotificationConfig <a name="SecuritylakeSubscriberNotificationConfig" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

&securitylakesubscribernotification.SecuritylakeSubscriberNotificationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SubscriberId: *string,
	Configuration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberId">SubscriberId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#subscriber_id SecuritylakeSubscriberNotification#subscriber_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.configuration">Configuration</a></code> | <code>interface{}</code> | configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubscriberId`<sup>Required</sup> <a name="SubscriberId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberId"></a>

```go
SubscriberId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#subscriber_id SecuritylakeSubscriberNotification#subscriber_id}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.configuration"></a>

```go
Configuration interface{}
```

- *Type:* interface{}

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#configuration SecuritylakeSubscriberNotification#configuration}

---

### SecuritylakeSubscriberNotificationConfiguration <a name="SecuritylakeSubscriberNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

&securitylakesubscribernotification.SecuritylakeSubscriberNotificationConfiguration {
	HttpsNotificationConfiguration: interface{},
	SqsNotificationConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.property.httpsNotificationConfiguration">HttpsNotificationConfiguration</a></code> | <code>interface{}</code> | https_notification_configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.property.sqsNotificationConfiguration">SqsNotificationConfiguration</a></code> | <code>interface{}</code> | sqs_notification_configuration block. |

---

##### `HttpsNotificationConfiguration`<sup>Optional</sup> <a name="HttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.property.httpsNotificationConfiguration"></a>

```go
HttpsNotificationConfiguration interface{}
```

- *Type:* interface{}

https_notification_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#https_notification_configuration SecuritylakeSubscriberNotification#https_notification_configuration}

---

##### `SqsNotificationConfiguration`<sup>Optional</sup> <a name="SqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.property.sqsNotificationConfiguration"></a>

```go
SqsNotificationConfiguration interface{}
```

- *Type:* interface{}

sqs_notification_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration SecuritylakeSubscriberNotification#sqs_notification_configuration}

---

### SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration <a name="SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

&securitylakesubscribernotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration {
	Endpoint: *string,
	TargetRoleArn: *string,
	AuthorizationApiKeyName: *string,
	AuthorizationApiKeyValue: *string,
	HttpMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn">TargetRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName">AuthorizationApiKeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue">AuthorizationApiKeyValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}.

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn"></a>

```go
TargetRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}.

---

##### `AuthorizationApiKeyName`<sup>Optional</sup> <a name="AuthorizationApiKeyName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName"></a>

```go
AuthorizationApiKeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}.

---

##### `AuthorizationApiKeyValue`<sup>Optional</sup> <a name="AuthorizationApiKeyValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue"></a>

```go
AuthorizationApiKeyValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}.

---

### SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration <a name="SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

&securitylakesubscribernotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList <a name="SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.get"></a>

```go
func Get(index *f64) SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName">ResetAuthorizationApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue">ResetAuthorizationApiKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationApiKeyName` <a name="ResetAuthorizationApiKeyName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName"></a>

```go
func ResetAuthorizationApiKeyName()
```

##### `ResetAuthorizationApiKeyValue` <a name="ResetAuthorizationApiKeyValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue"></a>

```go
func ResetAuthorizationApiKeyValue()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput">AuthorizationApiKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput">AuthorizationApiKeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput">TargetRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName">AuthorizationApiKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue">AuthorizationApiKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn">TargetRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationApiKeyNameInput`<sup>Optional</sup> <a name="AuthorizationApiKeyNameInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput"></a>

```go
func AuthorizationApiKeyNameInput() *string
```

- *Type:* *string

---

##### `AuthorizationApiKeyValueInput`<sup>Optional</sup> <a name="AuthorizationApiKeyValueInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput"></a>

```go
func AuthorizationApiKeyValueInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `TargetRoleArnInput`<sup>Optional</sup> <a name="TargetRoleArnInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput"></a>

```go
func TargetRoleArnInput() *string
```

- *Type:* *string

---

##### `AuthorizationApiKeyName`<sup>Required</sup> <a name="AuthorizationApiKeyName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName"></a>

```go
func AuthorizationApiKeyName() *string
```

- *Type:* *string

---

##### `AuthorizationApiKeyValue`<sup>Required</sup> <a name="AuthorizationApiKeyValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue"></a>

```go
func AuthorizationApiKeyValue() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn"></a>

```go
func TargetRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberNotificationConfigurationList <a name="SecuritylakeSubscriberNotificationConfigurationList" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotificationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeSubscriberNotificationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.get"></a>

```go
func Get(index *f64) SecuritylakeSubscriberNotificationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotificationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeSubscriberNotificationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putHttpsNotificationConfiguration">PutHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putSqsNotificationConfiguration">PutSqsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration">ResetHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resetSqsNotificationConfiguration">ResetSqsNotificationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpsNotificationConfiguration` <a name="PutHttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putHttpsNotificationConfiguration"></a>

```go
func PutHttpsNotificationConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putHttpsNotificationConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSqsNotificationConfiguration` <a name="PutSqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putSqsNotificationConfiguration"></a>

```go
func PutSqsNotificationConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putSqsNotificationConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHttpsNotificationConfiguration` <a name="ResetHttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration"></a>

```go
func ResetHttpsNotificationConfiguration()
```

##### `ResetSqsNotificationConfiguration` <a name="ResetSqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resetSqsNotificationConfiguration"></a>

```go
func ResetSqsNotificationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.httpsNotificationConfiguration">HttpsNotificationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.sqsNotificationConfiguration">SqsNotificationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput">HttpsNotificationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput">SqsNotificationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpsNotificationConfiguration`<sup>Required</sup> <a name="HttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.httpsNotificationConfiguration"></a>

```go
func HttpsNotificationConfiguration() SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList</a>

---

##### `SqsNotificationConfiguration`<sup>Required</sup> <a name="SqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.sqsNotificationConfiguration"></a>

```go
func SqsNotificationConfiguration() SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList</a>

---

##### `HttpsNotificationConfigurationInput`<sup>Optional</sup> <a name="HttpsNotificationConfigurationInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput"></a>

```go
func HttpsNotificationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SqsNotificationConfigurationInput`<sup>Optional</sup> <a name="SqsNotificationConfigurationInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput"></a>

```go
func SqsNotificationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList <a name="SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.get"></a>

```go
func Get(index *f64) SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



