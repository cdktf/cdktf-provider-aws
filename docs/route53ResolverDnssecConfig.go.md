# `route53ResolverDnssecConfig` Submodule <a name="`route53ResolverDnssecConfig` Submodule" id="@cdktf/provider-aws.route53ResolverDnssecConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverDnssecConfig <a name="Route53ResolverDnssecConfig" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config aws_route53_resolver_dnssec_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverdnssecconfig"

route53resolverdnssecconfig.NewRoute53ResolverDnssecConfig(scope Construct, id *string, config Route53ResolverDnssecConfigConfig) Route53ResolverDnssecConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig">Route53ResolverDnssecConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig">Route53ResolverDnssecConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverdnssecconfig"

route53resolverdnssecconfig.Route53ResolverDnssecConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverdnssecconfig"

route53resolverdnssecconfig.Route53ResolverDnssecConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverdnssecconfig"

route53resolverdnssecconfig.Route53ResolverDnssecConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.validationStatus">ValidationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `ValidationStatus`<sup>Required</sup> <a name="ValidationStatus" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.validationStatus"></a>

```go
func ValidationStatus() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverDnssecConfigConfig <a name="Route53ResolverDnssecConfigConfig" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverdnssecconfig"

&route53resolverdnssecconfig.Route53ResolverDnssecConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config#resource_id Route53ResolverDnssecConfig#resource_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config#id Route53ResolverDnssecConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config#resource_id Route53ResolverDnssecConfig#resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53ResolverDnssecConfig.Route53ResolverDnssecConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config#id Route53ResolverDnssecConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



