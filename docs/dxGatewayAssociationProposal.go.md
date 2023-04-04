# `dxGatewayAssociationProposal` Submodule <a name="`dxGatewayAssociationProposal` Submodule" id="@cdktf/provider-aws.dxGatewayAssociationProposal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxGatewayAssociationProposal <a name="DxGatewayAssociationProposal" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal aws_dx_gateway_association_proposal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxgatewayassociationproposal"

dxgatewayassociationproposal.NewDxGatewayAssociationProposal(scope Construct, id *string, config DxGatewayAssociationProposalConfig) DxGatewayAssociationProposal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig">DxGatewayAssociationProposalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig">DxGatewayAssociationProposalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes">ResetAllowedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowedPrefixes` <a name="ResetAllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes"></a>

```go
func ResetAllowedPrefixes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxgatewayassociationproposal"

dxgatewayassociationproposal.DxGatewayAssociationProposal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxgatewayassociationproposal"

dxgatewayassociationproposal.DxGatewayAssociationProposal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxgatewayassociationproposal"

dxgatewayassociationproposal.DxGatewayAssociationProposal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId">AssociatedGatewayOwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType">AssociatedGatewayType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput">AllowedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput">AssociatedGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput">DxGatewayOwnerAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId">AssociatedGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId">DxGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId">DxGatewayOwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedGatewayOwnerAccountId`<sup>Required</sup> <a name="AssociatedGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId"></a>

```go
func AssociatedGatewayOwnerAccountId() *string
```

- *Type:* *string

---

##### `AssociatedGatewayType`<sup>Required</sup> <a name="AssociatedGatewayType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType"></a>

```go
func AssociatedGatewayType() *string
```

- *Type:* *string

---

##### `AllowedPrefixesInput`<sup>Optional</sup> <a name="AllowedPrefixesInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput"></a>

```go
func AllowedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssociatedGatewayIdInput`<sup>Optional</sup> <a name="AssociatedGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput"></a>

```go
func AssociatedGatewayIdInput() *string
```

- *Type:* *string

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput"></a>

```go
func DxGatewayIdInput() *string
```

- *Type:* *string

---

##### `DxGatewayOwnerAccountIdInput`<sup>Optional</sup> <a name="DxGatewayOwnerAccountIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput"></a>

```go
func DxGatewayOwnerAccountIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes"></a>

```go
func AllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `AssociatedGatewayId`<sup>Required</sup> <a name="AssociatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId"></a>

```go
func AssociatedGatewayId() *string
```

- *Type:* *string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId"></a>

```go
func DxGatewayId() *string
```

- *Type:* *string

---

##### `DxGatewayOwnerAccountId`<sup>Required</sup> <a name="DxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId"></a>

```go
func DxGatewayOwnerAccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DxGatewayAssociationProposalConfig <a name="DxGatewayAssociationProposalConfig" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxgatewayassociationproposal"

&dxgatewayassociationproposal.DxGatewayAssociationProposalConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssociatedGatewayId: *string,
	DxGatewayId: *string,
	DxGatewayOwnerAccountId: *string,
	AllowedPrefixes: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId">AssociatedGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId">DxGatewayOwnerAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedGatewayId`<sup>Required</sup> <a name="AssociatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId"></a>

```go
AssociatedGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}.

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId"></a>

```go
DxGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}.

---

##### `DxGatewayOwnerAccountId`<sup>Required</sup> <a name="DxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId"></a>

```go
DxGatewayOwnerAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}.

---

##### `AllowedPrefixes`<sup>Optional</sup> <a name="AllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes"></a>

```go
AllowedPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



