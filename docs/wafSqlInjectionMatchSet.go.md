# `wafSqlInjectionMatchSet` Submodule <a name="`wafSqlInjectionMatchSet` Submodule" id="@cdktf/provider-aws.wafSqlInjectionMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafSqlInjectionMatchSet <a name="WafSqlInjectionMatchSet" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set aws_waf_sql_injection_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

wafsqlinjectionmatchset.NewWafSqlInjectionMatchSet(scope Construct, id *string, config WafSqlInjectionMatchSetConfig) WafSqlInjectionMatchSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig">WafSqlInjectionMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig">WafSqlInjectionMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples">PutSqlInjectionMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples">ResetSqlInjectionMatchTuples</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSqlInjectionMatchTuples` <a name="PutSqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples"></a>

```go
func PutSqlInjectionMatchTuples(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId"></a>

```go
func ResetId()
```

##### `ResetSqlInjectionMatchTuples` <a name="ResetSqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples"></a>

```go
func ResetSqlInjectionMatchTuples()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

wafsqlinjectionmatchset.WafSqlInjectionMatchSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

wafsqlinjectionmatchset.WafSqlInjectionMatchSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

wafsqlinjectionmatchset.WafSqlInjectionMatchSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples">SqlInjectionMatchTuples</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput">SqlInjectionMatchTuplesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SqlInjectionMatchTuples`<sup>Required</sup> <a name="SqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

```go
func SqlInjectionMatchTuples() WafSqlInjectionMatchSetSqlInjectionMatchTuplesList
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SqlInjectionMatchTuplesInput`<sup>Optional</sup> <a name="SqlInjectionMatchTuplesInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput"></a>

```go
func SqlInjectionMatchTuplesInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafSqlInjectionMatchSetConfig <a name="WafSqlInjectionMatchSetConfig" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

&wafsqlinjectionmatchset.WafSqlInjectionMatchSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	SqlInjectionMatchTuples: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples">SqlInjectionMatchTuples</a></code> | <code>interface{}</code> | sql_injection_match_tuples block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SqlInjectionMatchTuples`<sup>Optional</sup> <a name="SqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples"></a>

```go
SqlInjectionMatchTuples interface{}
```

- *Type:* interface{}

sql_injection_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuples <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

&wafsqlinjectionmatchset.WafSqlInjectionMatchSetSqlInjectionMatchTuples {
	FieldToMatch: github.com/cdktf/cdktf-provider-aws-go/aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch,
	TextTransformation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation">TextTransformation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}. |

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch"></a>

```go
FieldToMatch WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#field_to_match WafSqlInjectionMatchSet#field_to_match}

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation"></a>

```go
TextTransformation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}.

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

&wafsqlinjectionmatchset.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch {
	Type: *string,
	Data: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data">Data</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data"></a>

```go
Data *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

wafsqlinjectionmatchset.NewWafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData"></a>

```go
func ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesList <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesList" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

wafsqlinjectionmatchset.NewWafSqlInjectionMatchSetSqlInjectionMatchTuplesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafSqlInjectionMatchSetSqlInjectionMatchTuplesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get"></a>

```go
func Get(index *f64) WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafsqlinjectionmatchset"

wafsqlinjectionmatchset.NewWafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch">PutFieldToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldToMatch` <a name="PutFieldToMatch" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch"></a>

```go
func PutFieldToMatch(value WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput">FieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput">TextTransformationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation">TextTransformation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch"></a>

```go
func FieldToMatch() WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a>

---

##### `FieldToMatchInput`<sup>Optional</sup> <a name="FieldToMatchInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```go
func FieldToMatchInput() WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---

##### `TextTransformationInput`<sup>Optional</sup> <a name="TextTransformationInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput"></a>

```go
func TextTransformationInput() *string
```

- *Type:* *string

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation"></a>

```go
func TextTransformation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



