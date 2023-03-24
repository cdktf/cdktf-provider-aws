# `ec2ManagedPrefixList` Submodule <a name="`ec2ManagedPrefixList` Submodule" id="@cdktf/provider-aws.ec2ManagedPrefixList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ManagedPrefixList <a name="Ec2ManagedPrefixList" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list aws_ec2_managed_prefix_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2managedprefixlist"

ec2managedprefixlist.NewEc2ManagedPrefixList(scope Construct, id *string, config Ec2ManagedPrefixListConfig) Ec2ManagedPrefixList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig">Ec2ManagedPrefixListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig">Ec2ManagedPrefixListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetEntry">ResetEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEntry` <a name="PutEntry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry"></a>

```go
func PutEntry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntry` <a name="ResetEntry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetEntry"></a>

```go
func ResetEntry()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2managedprefixlist"

ec2managedprefixlist.Ec2ManagedPrefixList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2managedprefixlist"

ec2managedprefixlist.Ec2ManagedPrefixList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2managedprefixlist"

ec2managedprefixlist.Ec2ManagedPrefixList_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entry">Entry</a></code> | <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList">Ec2ManagedPrefixListEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entryInput">EntryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntriesInput">MaxEntriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntries">MaxEntries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entry"></a>

```go
func Entry() Ec2ManagedPrefixListEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList">Ec2ManagedPrefixListEntryList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamilyInput"></a>

```go
func AddressFamilyInput() *string
```

- *Type:* *string

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entryInput"></a>

```go
func EntryInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxEntriesInput`<sup>Optional</sup> <a name="MaxEntriesInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntriesInput"></a>

```go
func MaxEntriesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamily"></a>

```go
func AddressFamily() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxEntries`<sup>Required</sup> <a name="MaxEntries" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntries"></a>

```go
func MaxEntries() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ManagedPrefixListConfig <a name="Ec2ManagedPrefixListConfig" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2managedprefixlist"

&ec2managedprefixlist.Ec2ManagedPrefixListConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AddressFamily: *string,
	MaxEntries: *f64,
	Name: *string,
	Entry: interface{},
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.maxEntries">MaxEntries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.entry">Entry</a></code> | <code>interface{}</code> | entry block. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.addressFamily"></a>

```go
AddressFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}.

---

##### `MaxEntries`<sup>Required</sup> <a name="MaxEntries" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.maxEntries"></a>

```go
MaxEntries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}.

---

##### `Entry`<sup>Optional</sup> <a name="Entry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.entry"></a>

```go
Entry interface{}
```

- *Type:* interface{}

entry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#entry Ec2ManagedPrefixList#entry}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}.

---

### Ec2ManagedPrefixListEntry <a name="Ec2ManagedPrefixListEntry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2managedprefixlist"

&ec2managedprefixlist.Ec2ManagedPrefixListEntry {
	Cidr: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.cidr">Cidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#cidr Ec2ManagedPrefixList#cidr}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#description Ec2ManagedPrefixList#description}. |

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#cidr Ec2ManagedPrefixList#cidr}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#description Ec2ManagedPrefixList#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ManagedPrefixListEntryList <a name="Ec2ManagedPrefixListEntryList" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2managedprefixlist"

ec2managedprefixlist.NewEc2ManagedPrefixListEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2ManagedPrefixListEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get"></a>

```go
func Get(index *f64) Ec2ManagedPrefixListEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2ManagedPrefixListEntryOutputReference <a name="Ec2ManagedPrefixListEntryOutputReference" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2managedprefixlist"

ec2managedprefixlist.NewEc2ManagedPrefixListEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2ManagedPrefixListEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



