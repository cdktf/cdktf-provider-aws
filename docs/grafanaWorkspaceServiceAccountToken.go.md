# `grafanaWorkspaceServiceAccountToken` Submodule <a name="`grafanaWorkspaceServiceAccountToken` Submodule" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceServiceAccountToken <a name="GrafanaWorkspaceServiceAccountToken" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token aws_grafana_workspace_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspaceserviceaccounttoken"

grafanaworkspaceserviceaccounttoken.NewGrafanaWorkspaceServiceAccountToken(scope Construct, id *string, config GrafanaWorkspaceServiceAccountTokenConfig) GrafanaWorkspaceServiceAccountToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig">GrafanaWorkspaceServiceAccountTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig">GrafanaWorkspaceServiceAccountTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspaceserviceaccounttoken"

grafanaworkspaceserviceaccounttoken.GrafanaWorkspaceServiceAccountToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspaceserviceaccounttoken"

grafanaworkspaceserviceaccounttoken.GrafanaWorkspaceServiceAccountToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspaceserviceaccounttoken"

grafanaworkspaceserviceaccounttoken.GrafanaWorkspaceServiceAccountToken_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspaceserviceaccounttoken"

grafanaworkspaceserviceaccounttoken.GrafanaWorkspaceServiceAccountToken_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GrafanaWorkspaceServiceAccountToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GrafanaWorkspaceServiceAccountToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GrafanaWorkspaceServiceAccountToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountTokenId">ServiceAccountTokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLiveInput">SecondsToLiveInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountIdInput">ServiceAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLive">SecondsToLive</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ServiceAccountTokenId`<sup>Required</sup> <a name="ServiceAccountTokenId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountTokenId"></a>

```go
func ServiceAccountTokenId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecondsToLiveInput`<sup>Optional</sup> <a name="SecondsToLiveInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLiveInput"></a>

```go
func SecondsToLiveInput() *f64
```

- *Type:* *f64

---

##### `ServiceAccountIdInput`<sup>Optional</sup> <a name="ServiceAccountIdInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountIdInput"></a>

```go
func ServiceAccountIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecondsToLive`<sup>Required</sup> <a name="SecondsToLive" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLive"></a>

```go
func SecondsToLive() *f64
```

- *Type:* *f64

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceServiceAccountTokenConfig <a name="GrafanaWorkspaceServiceAccountTokenConfig" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/grafanaworkspaceserviceaccounttoken"

&grafanaworkspaceserviceaccounttoken.GrafanaWorkspaceServiceAccountTokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SecondsToLive: *f64,
	ServiceAccountId: *string,
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.secondsToLive">SecondsToLive</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}.

---

##### `SecondsToLive`<sup>Required</sup> <a name="SecondsToLive" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.secondsToLive"></a>

```go
SecondsToLive *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}.

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.serviceAccountId"></a>

```go
ServiceAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}.

---



