# `ecrPullThroughCacheRule` Submodule <a name="`ecrPullThroughCacheRule` Submodule" id="@cdktf/provider-aws.ecrPullThroughCacheRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPullThroughCacheRule <a name="EcrPullThroughCacheRule" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpullthroughcacherule"

ecrpullthroughcacherule.NewEcrPullThroughCacheRule(scope Construct, id *string, config EcrPullThroughCacheRuleConfig) EcrPullThroughCacheRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig">EcrPullThroughCacheRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig">EcrPullThroughCacheRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpullthroughcacherule"

ecrpullthroughcacherule.EcrPullThroughCacheRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpullthroughcacherule"

ecrpullthroughcacherule.EcrPullThroughCacheRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpullthroughcacherule"

ecrpullthroughcacherule.EcrPullThroughCacheRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId">RegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput">EcrRepositoryPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput">UpstreamRegistryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix">EcrRepositoryPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl">UpstreamRegistryUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId"></a>

```go
func RegistryId() *string
```

- *Type:* *string

---

##### `EcrRepositoryPrefixInput`<sup>Optional</sup> <a name="EcrRepositoryPrefixInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput"></a>

```go
func EcrRepositoryPrefixInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UpstreamRegistryUrlInput`<sup>Optional</sup> <a name="UpstreamRegistryUrlInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput"></a>

```go
func UpstreamRegistryUrlInput() *string
```

- *Type:* *string

---

##### `EcrRepositoryPrefix`<sup>Required</sup> <a name="EcrRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix"></a>

```go
func EcrRepositoryPrefix() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpstreamRegistryUrl`<sup>Required</sup> <a name="UpstreamRegistryUrl" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl"></a>

```go
func UpstreamRegistryUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPullThroughCacheRuleConfig <a name="EcrPullThroughCacheRuleConfig" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpullthroughcacherule"

&ecrpullthroughcacherule.EcrPullThroughCacheRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EcrRepositoryPrefix: *string,
	UpstreamRegistryUrl: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix">EcrRepositoryPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl">UpstreamRegistryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EcrRepositoryPrefix`<sup>Required</sup> <a name="EcrRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix"></a>

```go
EcrRepositoryPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}.

---

##### `UpstreamRegistryUrl`<sup>Required</sup> <a name="UpstreamRegistryUrl" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl"></a>

```go
UpstreamRegistryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



