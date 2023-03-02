# `mskconnectCustomPlugin` Submodule <a name="`mskconnectCustomPlugin` Submodule" id="@cdktf/provider-aws.mskconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskconnectCustomPlugin <a name="MskconnectCustomPlugin" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin aws_mskconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

new mskconnectCustomPlugin.MskconnectCustomPlugin(scope: Construct, id: string, config: MskconnectCustomPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig">MskconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig">MskconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLocation` <a name="putLocation" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putLocation"></a>

```typescript
public putLocation(value: MskconnectCustomPluginLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putTimeouts"></a>

```typescript
public putTimeouts(value: MskconnectCustomPluginTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.latestRevision">latestRevision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference">MskconnectCustomPluginLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference">MskconnectCustomPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.locationInput">locationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.latestRevision"></a>

```typescript
public readonly latestRevision: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.location"></a>

```typescript
public readonly location: MskconnectCustomPluginLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference">MskconnectCustomPluginLocationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeouts"></a>

```typescript
public readonly timeouts: MskconnectCustomPluginTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference">MskconnectCustomPluginTimeoutsOutputReference</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.locationInput"></a>

```typescript
public readonly locationInput: MskconnectCustomPluginLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MskconnectCustomPluginTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a> | cdktf.IResolvable

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskconnectCustomPluginConfig <a name="MskconnectCustomPluginConfig" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.Initializer"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

const mskconnectCustomPluginConfig: mskconnectCustomPlugin.MskconnectCustomPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#content_type MskconnectCustomPlugin#content_type}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#name MskconnectCustomPlugin#name}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#description MskconnectCustomPlugin#description}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#id MskconnectCustomPlugin#id}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#content_type MskconnectCustomPlugin#content_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.location"></a>

```typescript
public readonly location: MskconnectCustomPluginLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#location MskconnectCustomPlugin#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#name MskconnectCustomPlugin#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#description MskconnectCustomPlugin#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#id MskconnectCustomPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MskconnectCustomPluginTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#timeouts MskconnectCustomPlugin#timeouts}

---

### MskconnectCustomPluginLocation <a name="MskconnectCustomPluginLocation" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation.Initializer"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

const mskconnectCustomPluginLocation: mskconnectCustomPlugin.MskconnectCustomPluginLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a></code> | s3 block. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation.property.s3"></a>

```typescript
public readonly s3: MskconnectCustomPluginLocationS3;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#s3 MskconnectCustomPlugin#s3}

---

### MskconnectCustomPluginLocationS3 <a name="MskconnectCustomPluginLocationS3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.Initializer"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

const mskconnectCustomPluginLocationS3: mskconnectCustomPlugin.MskconnectCustomPluginLocationS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.bucketArn">bucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#bucket_arn MskconnectCustomPlugin#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.fileKey">fileKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#file_key MskconnectCustomPlugin#file_key}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.objectVersion">objectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#object_version MskconnectCustomPlugin#object_version}. |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#bucket_arn MskconnectCustomPlugin#bucket_arn}.

---

##### `fileKey`<sup>Required</sup> <a name="fileKey" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.fileKey"></a>

```typescript
public readonly fileKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#file_key MskconnectCustomPlugin#file_key}.

---

##### `objectVersion`<sup>Optional</sup> <a name="objectVersion" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3.property.objectVersion"></a>

```typescript
public readonly objectVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#object_version MskconnectCustomPlugin#object_version}.

---

### MskconnectCustomPluginTimeouts <a name="MskconnectCustomPluginTimeouts" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.Initializer"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

const mskconnectCustomPluginTimeouts: mskconnectCustomPlugin.MskconnectCustomPluginTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#create MskconnectCustomPlugin#create}. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#delete MskconnectCustomPlugin#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#create MskconnectCustomPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_custom_plugin#delete MskconnectCustomPlugin#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskconnectCustomPluginLocationOutputReference <a name="MskconnectCustomPluginLocationOutputReference" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

new mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.putS3">putS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.putS3"></a>

```typescript
public putS3(value: MskconnectCustomPluginLocationS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference">MskconnectCustomPluginLocationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3"></a>

```typescript
public readonly s3: MskconnectCustomPluginLocationS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference">MskconnectCustomPluginLocationS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: MskconnectCustomPluginLocationS3;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectCustomPluginLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocation">MskconnectCustomPluginLocation</a>

---


### MskconnectCustomPluginLocationS3OutputReference <a name="MskconnectCustomPluginLocationS3OutputReference" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

new mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resetObjectVersion">resetObjectVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetObjectVersion` <a name="resetObjectVersion" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.resetObjectVersion"></a>

```typescript
public resetObjectVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKeyInput">fileKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersionInput">objectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKey">fileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersion">objectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `fileKeyInput`<sup>Optional</sup> <a name="fileKeyInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKeyInput"></a>

```typescript
public readonly fileKeyInput: string;
```

- *Type:* string

---

##### `objectVersionInput`<sup>Optional</sup> <a name="objectVersionInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersionInput"></a>

```typescript
public readonly objectVersionInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `fileKey`<sup>Required</sup> <a name="fileKey" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.fileKey"></a>

```typescript
public readonly fileKey: string;
```

- *Type:* string

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectCustomPluginLocationS3;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginLocationS3">MskconnectCustomPluginLocationS3</a>

---


### MskconnectCustomPluginTimeoutsOutputReference <a name="MskconnectCustomPluginTimeoutsOutputReference" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer"></a>

```typescript
import { mskconnectCustomPlugin } from '@cdktf/provider-aws'

new mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MskconnectCustomPluginTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectCustomPlugin.MskconnectCustomPluginTimeouts">MskconnectCustomPluginTimeouts</a> | cdktf.IResolvable

---



