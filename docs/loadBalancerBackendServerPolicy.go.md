# `loadBalancerBackendServerPolicy` Submodule <a name="`loadBalancerBackendServerPolicy` Submodule" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerBackendServerPolicy <a name="LoadBalancerBackendServerPolicy" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy aws_load_balancer_backend_server_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/loadbalancerbackendserverpolicy"

loadbalancerbackendserverpolicy.NewLoadBalancerBackendServerPolicy(scope Construct, id *string, config LoadBalancerBackendServerPolicyConfig) LoadBalancerBackendServerPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig">LoadBalancerBackendServerPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig">LoadBalancerBackendServerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetPolicyNames">ResetPolicyNames</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyNames` <a name="ResetPolicyNames" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetPolicyNames"></a>

```go
func ResetPolicyNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerBackendServerPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/loadbalancerbackendserverpolicy"

loadbalancerbackendserverpolicy.LoadBalancerBackendServerPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/loadbalancerbackendserverpolicy"

loadbalancerbackendserverpolicy.LoadBalancerBackendServerPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/loadbalancerbackendserverpolicy"

loadbalancerbackendserverpolicy.LoadBalancerBackendServerPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/loadbalancerbackendserverpolicy"

loadbalancerbackendserverpolicy.LoadBalancerBackendServerPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoadBalancerBackendServerPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoadBalancerBackendServerPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoadBalancerBackendServerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerBackendServerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePortInput">InstancePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerNameInput">LoadBalancerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNamesInput">PolicyNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePort">InstancePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerName">LoadBalancerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNames">PolicyNames</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstancePortInput`<sup>Optional</sup> <a name="InstancePortInput" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePortInput"></a>

```go
func InstancePortInput() *f64
```

- *Type:* *f64

---

##### `LoadBalancerNameInput`<sup>Optional</sup> <a name="LoadBalancerNameInput" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerNameInput"></a>

```go
func LoadBalancerNameInput() *string
```

- *Type:* *string

---

##### `PolicyNamesInput`<sup>Optional</sup> <a name="PolicyNamesInput" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNamesInput"></a>

```go
func PolicyNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstancePort`<sup>Required</sup> <a name="InstancePort" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePort"></a>

```go
func InstancePort() *f64
```

- *Type:* *f64

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerName"></a>

```go
func LoadBalancerName() *string
```

- *Type:* *string

---

##### `PolicyNames`<sup>Required</sup> <a name="PolicyNames" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNames"></a>

```go
func PolicyNames() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerBackendServerPolicyConfig <a name="LoadBalancerBackendServerPolicyConfig" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/loadbalancerbackendserverpolicy"

&loadbalancerbackendserverpolicy.LoadBalancerBackendServerPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstancePort: *f64,
	LoadBalancerName: *string,
	Id: *string,
	PolicyNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.instancePort">InstancePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.loadBalancerName">LoadBalancerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.policyNames">PolicyNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstancePort`<sup>Required</sup> <a name="InstancePort" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.instancePort"></a>

```go
InstancePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}.

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.loadBalancerName"></a>

```go
LoadBalancerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyNames`<sup>Optional</sup> <a name="PolicyNames" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.policyNames"></a>

```go
PolicyNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}.

---



