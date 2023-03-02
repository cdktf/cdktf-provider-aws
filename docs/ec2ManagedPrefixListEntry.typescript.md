# `ec2ManagedPrefixListEntry` Submodule <a name="`ec2ManagedPrefixListEntry` Submodule" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ManagedPrefixListEntryA <a name="Ec2ManagedPrefixListEntryA" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry aws_ec2_managed_prefix_list_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer"></a>

```typescript
import { ec2ManagedPrefixListEntry } from '@cdktf/provider-aws'

new ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA(scope: Construct, id: string, config: Ec2ManagedPrefixListEntryAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig">Ec2ManagedPrefixListEntryAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig">Ec2ManagedPrefixListEntryAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct"></a>

```typescript
import { ec2ManagedPrefixListEntry } from '@cdktf/provider-aws'

ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement"></a>

```typescript
import { ec2ManagedPrefixListEntry } from '@cdktf/provider-aws'

ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource"></a>

```typescript
import { ec2ManagedPrefixListEntry } from '@cdktf/provider-aws'

ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListIdInput">prefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListId">prefixListId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `prefixListIdInput`<sup>Optional</sup> <a name="prefixListIdInput" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListIdInput"></a>

```typescript
public readonly prefixListIdInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ManagedPrefixListEntryAConfig <a name="Ec2ManagedPrefixListEntryAConfig" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.Initializer"></a>

```typescript
import { ec2ManagedPrefixListEntry } from '@cdktf/provider-aws'

const ec2ManagedPrefixListEntryAConfig: ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#cidr Ec2ManagedPrefixListEntryA#cidr}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.prefixListId">prefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#description Ec2ManagedPrefixListEntryA#description}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#id Ec2ManagedPrefixListEntryA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#cidr Ec2ManagedPrefixListEntryA#cidr}.

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#description Ec2ManagedPrefixListEntryA#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixListEntry.Ec2ManagedPrefixListEntryAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry#id Ec2ManagedPrefixListEntryA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



