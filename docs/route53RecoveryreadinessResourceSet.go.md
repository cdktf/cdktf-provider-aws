# `route53RecoveryreadinessResourceSet` Submodule <a name="`route53RecoveryreadinessResourceSet` Submodule" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessResourceSet <a name="Route53RecoveryreadinessResourceSet" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set aws_route53recoveryreadiness_resource_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.NewRoute53RecoveryreadinessResourceSet(scope Construct, id *string, config Route53RecoveryreadinessResourceSetConfig) Route53RecoveryreadinessResourceSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig">Route53RecoveryreadinessResourceSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig">Route53RecoveryreadinessResourceSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putTimeouts"></a>

```go
func PutTimeouts(value Route53RecoveryreadinessResourceSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList">Route53RecoveryreadinessResourceSetResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference">Route53RecoveryreadinessResourceSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetNameInput">ResourceSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetTypeInput">ResourceSetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetName">ResourceSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetType">ResourceSetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resources"></a>

```go
func Resources() Route53RecoveryreadinessResourceSetResourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList">Route53RecoveryreadinessResourceSetResourcesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeouts"></a>

```go
func Timeouts() Route53RecoveryreadinessResourceSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference">Route53RecoveryreadinessResourceSetTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceSetNameInput`<sup>Optional</sup> <a name="ResourceSetNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetNameInput"></a>

```go
func ResourceSetNameInput() *string
```

- *Type:* *string

---

##### `ResourceSetTypeInput`<sup>Optional</sup> <a name="ResourceSetTypeInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetTypeInput"></a>

```go
func ResourceSetTypeInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceSetName`<sup>Required</sup> <a name="ResourceSetName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetName"></a>

```go
func ResourceSetName() *string
```

- *Type:* *string

---

##### `ResourceSetType`<sup>Required</sup> <a name="ResourceSetType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetType"></a>

```go
func ResourceSetType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessResourceSetConfig <a name="Route53RecoveryreadinessResourceSetConfig" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

&route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Resources: interface{},
	ResourceSetName: *string,
	ResourceSetType: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resources">Resources</a></code> | <code>interface{}</code> | resources block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetName">ResourceSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetType">ResourceSetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#id Route53RecoveryreadinessResourceSet#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags_all Route53RecoveryreadinessResourceSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resources Route53RecoveryreadinessResourceSet#resources}

---

##### `ResourceSetName`<sup>Required</sup> <a name="ResourceSetName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetName"></a>

```go
ResourceSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}.

---

##### `ResourceSetType`<sup>Required</sup> <a name="ResourceSetType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetType"></a>

```go
ResourceSetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#id Route53RecoveryreadinessResourceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags_all Route53RecoveryreadinessResourceSet#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.timeouts"></a>

```go
Timeouts Route53RecoveryreadinessResourceSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#timeouts Route53RecoveryreadinessResourceSet#timeouts}

---

### Route53RecoveryreadinessResourceSetResources <a name="Route53RecoveryreadinessResourceSetResources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

&route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSetResources {
	DnsTargetResource: github.com/cdktf/cdktf-provider-aws-go/aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource,
	ReadinessScopes: *[]*string,
	ResourceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.dnsTargetResource">DnsTargetResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | dns_target_resource block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.readinessScopes">ReadinessScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}. |

---

##### `DnsTargetResource`<sup>Optional</sup> <a name="DnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.dnsTargetResource"></a>

```go
DnsTargetResource Route53RecoveryreadinessResourceSetResourcesDnsTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

dns_target_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#dns_target_resource Route53RecoveryreadinessResourceSet#dns_target_resource}

---

##### `ReadinessScopes`<sup>Optional</sup> <a name="ReadinessScopes" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.readinessScopes"></a>

```go
ReadinessScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}.

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}.

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

&route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource {
	DomainName: *string,
	HostedZoneArn: *string,
	RecordSetId: *string,
	RecordType: *string,
	TargetResource: github.com/cdktf/cdktf-provider-aws-go/aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.hostedZoneArn">HostedZoneArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordSetId">RecordSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordType">RecordType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_type Route53RecoveryreadinessResourceSet#record_type}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.targetResource">TargetResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | target_resource block. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}.

---

##### `HostedZoneArn`<sup>Optional</sup> <a name="HostedZoneArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.hostedZoneArn"></a>

```go
HostedZoneArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}.

---

##### `RecordSetId`<sup>Optional</sup> <a name="RecordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordSetId"></a>

```go
RecordSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}.

---

##### `RecordType`<sup>Optional</sup> <a name="RecordType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordType"></a>

```go
RecordType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_type Route53RecoveryreadinessResourceSet#record_type}.

---

##### `TargetResource`<sup>Optional</sup> <a name="TargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.targetResource"></a>

```go
TargetResource Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

target_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#target_resource Route53RecoveryreadinessResourceSet#target_resource}

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

&route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {
	NlbResource: github.com/cdktf/cdktf-provider-aws-go/aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource,
	R53Resource: github.com/cdktf/cdktf-provider-aws-go/aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.nlbResource">NlbResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | nlb_resource block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.r53Resource">R53Resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | r53_resource block. |

---

##### `NlbResource`<sup>Optional</sup> <a name="NlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.nlbResource"></a>

```go
NlbResource Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

nlb_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}

---

##### `R53Resource`<sup>Optional</sup> <a name="R53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.r53Resource"></a>

```go
R53Resource Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

r53_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

&route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource {
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#arn Route53RecoveryreadinessResourceSet#arn}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#arn Route53RecoveryreadinessResourceSet#arn}.

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

&route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource {
	DomainName: *string,
	RecordSetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.recordSetId">RecordSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}. |

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}.

---

##### `RecordSetId`<sup>Optional</sup> <a name="RecordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.recordSetId"></a>

```go
RecordSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}.

---

### Route53RecoveryreadinessResourceSetTimeouts <a name="Route53RecoveryreadinessResourceSetTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

&route53recoveryreadinessresourceset.Route53RecoveryreadinessResourceSetTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#delete Route53RecoveryreadinessResourceSet#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#delete Route53RecoveryreadinessResourceSet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.NewRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource">PutTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetHostedZoneArn">ResetHostedZoneArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordSetId">ResetRecordSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordType">ResetRecordType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetTargetResource">ResetTargetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetResource` <a name="PutTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource"></a>

```go
func PutTargetResource(value Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

---

##### `ResetHostedZoneArn` <a name="ResetHostedZoneArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetHostedZoneArn"></a>

```go
func ResetHostedZoneArn()
```

##### `ResetRecordSetId` <a name="ResetRecordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordSetId"></a>

```go
func ResetRecordSetId()
```

##### `ResetRecordType` <a name="ResetRecordType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordType"></a>

```go
func ResetRecordType()
```

##### `ResetTargetResource` <a name="ResetTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetTargetResource"></a>

```go
func ResetTargetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResource">TargetResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArnInput">HostedZoneArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetIdInput">RecordSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordTypeInput">RecordTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResourceInput">TargetResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArn">HostedZoneArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetId">RecordSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordType">RecordType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResource"></a>

```go
func TargetResource() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `HostedZoneArnInput`<sup>Optional</sup> <a name="HostedZoneArnInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArnInput"></a>

```go
func HostedZoneArnInput() *string
```

- *Type:* *string

---

##### `RecordSetIdInput`<sup>Optional</sup> <a name="RecordSetIdInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetIdInput"></a>

```go
func RecordSetIdInput() *string
```

- *Type:* *string

---

##### `RecordTypeInput`<sup>Optional</sup> <a name="RecordTypeInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordTypeInput"></a>

```go
func RecordTypeInput() *string
```

- *Type:* *string

---

##### `TargetResourceInput`<sup>Optional</sup> <a name="TargetResourceInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResourceInput"></a>

```go
func TargetResourceInput() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `HostedZoneArn`<sup>Required</sup> <a name="HostedZoneArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArn"></a>

```go
func HostedZoneArn() *string
```

- *Type:* *string

---

##### `RecordSetId`<sup>Required</sup> <a name="RecordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetId"></a>

```go
func RecordSetId() *string
```

- *Type:* *string

---

##### `RecordType`<sup>Required</sup> <a name="RecordType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordType"></a>

```go
func RecordType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecoveryreadinessResourceSetResourcesDnsTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

---


### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.NewRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resetArn"></a>

```go
func ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

---


### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.NewRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putNlbResource">PutNlbResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource">PutR53Resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetNlbResource">ResetNlbResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetR53Resource">ResetR53Resource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNlbResource` <a name="PutNlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putNlbResource"></a>

```go
func PutNlbResource(value Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putNlbResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

---

##### `PutR53Resource` <a name="PutR53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource"></a>

```go
func PutR53Resource(value Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

---

##### `ResetNlbResource` <a name="ResetNlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetNlbResource"></a>

```go
func ResetNlbResource()
```

##### `ResetR53Resource` <a name="ResetR53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetR53Resource"></a>

```go
func ResetR53Resource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResource">NlbResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53Resource">R53Resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResourceInput">NlbResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53ResourceInput">R53ResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NlbResource`<sup>Required</sup> <a name="NlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResource"></a>

```go
func NlbResource() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference</a>

---

##### `R53Resource`<sup>Required</sup> <a name="R53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53Resource"></a>

```go
func R53Resource() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference</a>

---

##### `NlbResourceInput`<sup>Optional</sup> <a name="NlbResourceInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResourceInput"></a>

```go
func NlbResourceInput() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

---

##### `R53ResourceInput`<sup>Optional</sup> <a name="R53ResourceInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53ResourceInput"></a>

```go
func R53ResourceInput() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

---


### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.NewRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetRecordSetId">ResetRecordSetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetRecordSetId` <a name="ResetRecordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetRecordSetId"></a>

```go
func ResetRecordSetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetIdInput">RecordSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetId">RecordSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `RecordSetIdInput`<sup>Optional</sup> <a name="RecordSetIdInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetIdInput"></a>

```go
func RecordSetIdInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `RecordSetId`<sup>Required</sup> <a name="RecordSetId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetId"></a>

```go
func RecordSetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

---


### Route53RecoveryreadinessResourceSetResourcesList <a name="Route53RecoveryreadinessResourceSetResourcesList" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.NewRoute53RecoveryreadinessResourceSetResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53RecoveryreadinessResourceSetResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.get"></a>

```go
func Get(index *f64) Route53RecoveryreadinessResourceSetResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecoveryreadinessResourceSetResourcesOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.NewRoute53RecoveryreadinessResourceSetResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53RecoveryreadinessResourceSetResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource">PutDnsTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetDnsTargetResource">ResetDnsTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetReadinessScopes">ResetReadinessScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsTargetResource` <a name="PutDnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource"></a>

```go
func PutDnsTargetResource(value Route53RecoveryreadinessResourceSetResourcesDnsTargetResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

---

##### `ResetDnsTargetResource` <a name="ResetDnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetDnsTargetResource"></a>

```go
func ResetDnsTargetResource()
```

##### `ResetReadinessScopes` <a name="ResetReadinessScopes" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetReadinessScopes"></a>

```go
func ResetReadinessScopes()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetResourceArn"></a>

```go
func ResetResourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.componentId">ComponentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResource">DnsTargetResource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResourceInput">DnsTargetResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopesInput">ReadinessScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopes">ReadinessScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentId`<sup>Required</sup> <a name="ComponentId" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.componentId"></a>

```go
func ComponentId() *string
```

- *Type:* *string

---

##### `DnsTargetResource`<sup>Required</sup> <a name="DnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResource"></a>

```go
func DnsTargetResource() Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference</a>

---

##### `DnsTargetResourceInput`<sup>Optional</sup> <a name="DnsTargetResourceInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResourceInput"></a>

```go
func DnsTargetResourceInput() Route53RecoveryreadinessResourceSetResourcesDnsTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

---

##### `ReadinessScopesInput`<sup>Optional</sup> <a name="ReadinessScopesInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopesInput"></a>

```go
func ReadinessScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `ReadinessScopes`<sup>Required</sup> <a name="ReadinessScopes" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopes"></a>

```go
func ReadinessScopes() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecoveryreadinessResourceSetTimeoutsOutputReference <a name="Route53RecoveryreadinessResourceSetTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53recoveryreadinessresourceset"

route53recoveryreadinessresourceset.NewRoute53RecoveryreadinessResourceSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecoveryreadinessResourceSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



