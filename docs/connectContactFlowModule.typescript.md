# `connectContactFlowModule` Submodule <a name="`connectContactFlowModule` Submodule" id="@cdktf/provider-aws.connectContactFlowModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectContactFlowModule <a name="ConnectContactFlowModule" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module aws_connect_contact_flow_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer"></a>

```typescript
import { connectContactFlowModule } from '@cdktf/provider-aws'

new connectContactFlowModule.ConnectContactFlowModule(scope: Construct, id: string, config: ConnectContactFlowModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig">ConnectContactFlowModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig">ConnectContactFlowModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetContentHash">resetContentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentHash` <a name="resetContentHash" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetContentHash"></a>

```typescript
public resetContentHash(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isConstruct"></a>

```typescript
import { connectContactFlowModule } from '@cdktf/provider-aws'

connectContactFlowModule.ConnectContactFlowModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement"></a>

```typescript
import { connectContactFlowModule } from '@cdktf/provider-aws'

connectContactFlowModule.ConnectContactFlowModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource"></a>

```typescript
import { connectContactFlowModule } from '@cdktf/provider-aws'

connectContactFlowModule.ConnectContactFlowModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contactFlowModuleId">contactFlowModuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentHashInput">contentHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentHash">contentHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `contactFlowModuleId`<sup>Required</sup> <a name="contactFlowModuleId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contactFlowModuleId"></a>

```typescript
public readonly contactFlowModuleId: string;
```

- *Type:* string

---

##### `contentHashInput`<sup>Optional</sup> <a name="contentHashInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentHashInput"></a>

```typescript
public readonly contentHashInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentHash`<sup>Required</sup> <a name="contentHash" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentHash"></a>

```typescript
public readonly contentHash: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectContactFlowModuleConfig <a name="ConnectContactFlowModuleConfig" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.Initializer"></a>

```typescript
import { connectContactFlowModule } from '@cdktf/provider-aws'

const connectContactFlowModuleConfig: connectContactFlowModule.ConnectContactFlowModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#instance_id ConnectContactFlowModule#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#name ConnectContactFlowModule#name}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#content ConnectContactFlowModule#content}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.contentHash">contentHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#content_hash ConnectContactFlowModule#content_hash}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#description ConnectContactFlowModule#description}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#filename ConnectContactFlowModule#filename}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#id ConnectContactFlowModule#id}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#tags ConnectContactFlowModule#tags}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#tags_all ConnectContactFlowModule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#instance_id ConnectContactFlowModule#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#name ConnectContactFlowModule#name}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#content ConnectContactFlowModule#content}.

---

##### `contentHash`<sup>Optional</sup> <a name="contentHash" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.contentHash"></a>

```typescript
public readonly contentHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#content_hash ConnectContactFlowModule#content_hash}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#description ConnectContactFlowModule#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#filename ConnectContactFlowModule#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#id ConnectContactFlowModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#tags ConnectContactFlowModule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#tags_all ConnectContactFlowModule#tags_all}.

---



