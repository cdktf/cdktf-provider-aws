# `connectPhoneNumberContactFlowAssociation` Submodule <a name="`connectPhoneNumberContactFlowAssociation` Submodule" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPhoneNumberContactFlowAssociation <a name="ConnectPhoneNumberContactFlowAssociation" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/connect_phone_number_contact_flow_association aws_connect_phone_number_contact_flow_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectphonenumbercontactflowassociation"

connectphonenumbercontactflowassociation.NewConnectPhoneNumberContactFlowAssociation(scope Construct, id *string, config ConnectPhoneNumberContactFlowAssociationConfig) ConnectPhoneNumberContactFlowAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig">ConnectPhoneNumberContactFlowAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig">ConnectPhoneNumberContactFlowAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConnectPhoneNumberContactFlowAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectphonenumbercontactflowassociation"

connectphonenumbercontactflowassociation.ConnectPhoneNumberContactFlowAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectphonenumbercontactflowassociation"

connectphonenumbercontactflowassociation.ConnectPhoneNumberContactFlowAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectphonenumbercontactflowassociation"

connectphonenumbercontactflowassociation.ConnectPhoneNumberContactFlowAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectphonenumbercontactflowassociation"

connectphonenumbercontactflowassociation.ConnectPhoneNumberContactFlowAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConnectPhoneNumberContactFlowAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectPhoneNumberContactFlowAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectPhoneNumberContactFlowAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/connect_phone_number_contact_flow_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConnectPhoneNumberContactFlowAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowIdInput">ContactFlowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberIdInput">PhoneNumberIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowId">ContactFlowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberId">PhoneNumberId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactFlowIdInput`<sup>Optional</sup> <a name="ContactFlowIdInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowIdInput"></a>

```go
func ContactFlowIdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `PhoneNumberIdInput`<sup>Optional</sup> <a name="PhoneNumberIdInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberIdInput"></a>

```go
func PhoneNumberIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ContactFlowId`<sup>Required</sup> <a name="ContactFlowId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowId"></a>

```go
func ContactFlowId() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `PhoneNumberId`<sup>Required</sup> <a name="PhoneNumberId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberId"></a>

```go
func PhoneNumberId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPhoneNumberContactFlowAssociationConfig <a name="ConnectPhoneNumberContactFlowAssociationConfig" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/connectphonenumbercontactflowassociation"

&connectphonenumbercontactflowassociation.ConnectPhoneNumberContactFlowAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContactFlowId: *string,
	InstanceId: *string,
	PhoneNumberId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.contactFlowId">ContactFlowId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/connect_phone_number_contact_flow_association#contact_flow_id ConnectPhoneNumberContactFlowAssociation#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/connect_phone_number_contact_flow_association#instance_id ConnectPhoneNumberContactFlowAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.phoneNumberId">PhoneNumberId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/connect_phone_number_contact_flow_association#phone_number_id ConnectPhoneNumberContactFlowAssociation#phone_number_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactFlowId`<sup>Required</sup> <a name="ContactFlowId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.contactFlowId"></a>

```go
ContactFlowId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/connect_phone_number_contact_flow_association#contact_flow_id ConnectPhoneNumberContactFlowAssociation#contact_flow_id}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/connect_phone_number_contact_flow_association#instance_id ConnectPhoneNumberContactFlowAssociation#instance_id}.

---

##### `PhoneNumberId`<sup>Required</sup> <a name="PhoneNumberId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.phoneNumberId"></a>

```go
PhoneNumberId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/connect_phone_number_contact_flow_association#phone_number_id ConnectPhoneNumberContactFlowAssociation#phone_number_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/connect_phone_number_contact_flow_association#region ConnectPhoneNumberContactFlowAssociation#region}

---



