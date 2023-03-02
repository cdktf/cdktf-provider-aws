# `route53HostedZoneDnssec` Submodule <a name="`route53HostedZoneDnssec` Submodule" id="@cdktf/provider-aws.route53HostedZoneDnssec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HostedZoneDnssec <a name="Route53HostedZoneDnssec" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53hostedzonednssec"

route53hostedzonednssec.NewRoute53HostedZoneDnssec(scope Construct, id *string, config Route53HostedZoneDnssecConfig) Route53HostedZoneDnssec
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig">Route53HostedZoneDnssecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig">Route53HostedZoneDnssecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetSigningStatus">ResetSigningStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetId"></a>

```go
func ResetId()
```

##### `ResetSigningStatus` <a name="ResetSigningStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.resetSigningStatus"></a>

```go
func ResetSigningStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53hostedzonednssec"

route53hostedzonednssec.Route53HostedZoneDnssec_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53hostedzonednssec"

route53hostedzonednssec.Route53HostedZoneDnssec_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53hostedzonednssec"

route53hostedzonednssec.Route53HostedZoneDnssec_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatusInput">SigningStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatus">SigningStatus</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneIdInput"></a>

```go
func HostedZoneIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SigningStatusInput`<sup>Optional</sup> <a name="SigningStatusInput" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatusInput"></a>

```go
func SigningStatusInput() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SigningStatus`<sup>Required</sup> <a name="SigningStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.signingStatus"></a>

```go
func SigningStatus() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssec.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HostedZoneDnssecConfig <a name="Route53HostedZoneDnssecConfig" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53hostedzonednssec"

&route53hostedzonednssec.Route53HostedZoneDnssecConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HostedZoneId: *string,
	Id: *string,
	SigningStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}. |
| <code><a href="#@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.signingStatus">SigningStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.hostedZoneId"></a>

```go
HostedZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SigningStatus`<sup>Optional</sup> <a name="SigningStatus" id="@cdktf/provider-aws.route53HostedZoneDnssec.Route53HostedZoneDnssecConfig.property.signingStatus"></a>

```go
SigningStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}.

---



