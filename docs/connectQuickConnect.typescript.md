# `connectQuickConnect` Submodule <a name="`connectQuickConnect` Submodule" id="@cdktf/provider-aws.connectQuickConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQuickConnect <a name="ConnectQuickConnect" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect aws_connect_quick_connect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

new connectQuickConnect.ConnectQuickConnect(scope: Construct, id: string, config: ConnectQuickConnectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig">ConnectQuickConnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig">ConnectQuickConnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig">putQuickConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putQuickConnectConfig` <a name="putQuickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig"></a>

```typescript
public putQuickConnectConfig(value: ConnectQuickConnectQuickConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isConstruct"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

connectQuickConnect.ConnectQuickConnect.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformElement"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

connectQuickConnect.ConnectQuickConnect.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformResource"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

connectQuickConnect.ConnectQuickConnect.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectId">quickConnectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput">quickConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig"></a>

```typescript
public readonly quickConnectConfig: ConnectQuickConnectQuickConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a>

---

##### `quickConnectId`<sup>Required</sup> <a name="quickConnectId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectId"></a>

```typescript
public readonly quickConnectId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `quickConnectConfigInput`<sup>Optional</sup> <a name="quickConnectConfigInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput"></a>

```typescript
public readonly quickConnectConfigInput: ConnectQuickConnectQuickConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnect.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQuickConnectConfig <a name="ConnectQuickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

const connectQuickConnectConfig: connectQuickConnect.ConnectQuickConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | quick_connect_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}.

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig"></a>

```typescript
public readonly quickConnectConfig: ConnectQuickConnectQuickConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

quick_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#id ConnectQuickConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}.

---

### ConnectQuickConnectQuickConnectConfig <a name="ConnectQuickConnectQuickConnectConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

const connectQuickConnectQuickConnectConfig: connectQuickConnect.ConnectQuickConnectQuickConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType">quickConnectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig">phoneConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>[]</code> | phone_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig">queueConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>[]</code> | queue_config block. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig">userConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>[]</code> | user_config block. |

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType"></a>

```typescript
public readonly quickConnectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}.

---

##### `phoneConfig`<sup>Optional</sup> <a name="phoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: IResolvable | ConnectQuickConnectQuickConnectConfigPhoneConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>[]

phone_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_config ConnectQuickConnect#phone_config}

---

##### `queueConfig`<sup>Optional</sup> <a name="queueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig"></a>

```typescript
public readonly queueConfig: IResolvable | ConnectQuickConnectQuickConnectConfigQueueConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>[]

queue_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_config ConnectQuickConnect#queue_config}

---

##### `userConfig`<sup>Optional</sup> <a name="userConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig"></a>

```typescript
public readonly userConfig: IResolvable | ConnectQuickConnectQuickConnectConfigUserConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>[]

user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_config ConnectQuickConnect#user_config}

---

### ConnectQuickConnectQuickConnectConfigPhoneConfig <a name="ConnectQuickConnectQuickConnectConfigPhoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

const connectQuickConnectQuickConnectConfigPhoneConfig: connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}. |

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}.

---

### ConnectQuickConnectQuickConnectConfigQueueConfig <a name="ConnectQuickConnectQuickConnectConfigQueueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

const connectQuickConnectQuickConnectConfigQueueConfig: connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueId">queueId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_id ConnectQuickConnect#queue_id}. |

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_id ConnectQuickConnect#queue_id}.

---

### ConnectQuickConnectQuickConnectConfigUserConfig <a name="ConnectQuickConnectQuickConnectConfigUserConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

const connectQuickConnectQuickConnectConfigUserConfig: connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_id ConnectQuickConnect#user_id}. |

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_id ConnectQuickConnect#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQuickConnectQuickConnectConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig">putPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig">putQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig">putUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig">resetPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig">resetQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig">resetUserConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPhoneConfig` <a name="putPhoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig"></a>

```typescript
public putPhoneConfig(value: IResolvable | ConnectQuickConnectQuickConnectConfigPhoneConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>[]

---

##### `putQueueConfig` <a name="putQueueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig"></a>

```typescript
public putQueueConfig(value: IResolvable | ConnectQuickConnectQuickConnectConfigQueueConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>[]

---

##### `putUserConfig` <a name="putUserConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig"></a>

```typescript
public putUserConfig(value: IResolvable | ConnectQuickConnectQuickConnectConfigUserConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>[]

---

##### `resetPhoneConfig` <a name="resetPhoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig"></a>

```typescript
public resetPhoneConfig(): void
```

##### `resetQueueConfig` <a name="resetQueueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig"></a>

```typescript
public resetQueueConfig(): void
```

##### `resetUserConfig` <a name="resetUserConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig"></a>

```typescript
public resetUserConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList">ConnectQuickConnectQuickConnectConfigPhoneConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig">queueConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList">ConnectQuickConnectQuickConnectConfigQueueConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig">userConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList">ConnectQuickConnectQuickConnectConfigUserConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput">phoneConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput">queueConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput">quickConnectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput">userConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType">quickConnectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: ConnectQuickConnectQuickConnectConfigPhoneConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList">ConnectQuickConnectQuickConnectConfigPhoneConfigList</a>

---

##### `queueConfig`<sup>Required</sup> <a name="queueConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig"></a>

```typescript
public readonly queueConfig: ConnectQuickConnectQuickConnectConfigQueueConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList">ConnectQuickConnectQuickConnectConfigQueueConfigList</a>

---

##### `userConfig`<sup>Required</sup> <a name="userConfig" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig"></a>

```typescript
public readonly userConfig: ConnectQuickConnectQuickConnectConfigUserConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList">ConnectQuickConnectQuickConnectConfigUserConfigList</a>

---

##### `phoneConfigInput`<sup>Optional</sup> <a name="phoneConfigInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput"></a>

```typescript
public readonly phoneConfigInput: IResolvable | ConnectQuickConnectQuickConnectConfigPhoneConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>[]

---

##### `queueConfigInput`<sup>Optional</sup> <a name="queueConfigInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput"></a>

```typescript
public readonly queueConfigInput: IResolvable | ConnectQuickConnectQuickConnectConfigQueueConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>[]

---

##### `quickConnectTypeInput`<sup>Optional</sup> <a name="quickConnectTypeInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput"></a>

```typescript
public readonly quickConnectTypeInput: string;
```

- *Type:* string

---

##### `userConfigInput`<sup>Optional</sup> <a name="userConfigInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput"></a>

```typescript
public readonly userConfigInput: IResolvable | ConnectQuickConnectQuickConnectConfigUserConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>[]

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType"></a>

```typescript
public readonly quickConnectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectQuickConnectQuickConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---


### ConnectQuickConnectQuickConnectConfigPhoneConfigList <a name="ConnectQuickConnectQuickConnectConfigPhoneConfigList" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.get"></a>

```typescript
public get(index: number): ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectQuickConnectConfigPhoneConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>[]

---


### ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectQuickConnectQuickConnectConfigPhoneConfig | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a> | cdktf.IResolvable

---


### ConnectQuickConnectQuickConnectConfigQueueConfigList <a name="ConnectQuickConnectQuickConnectConfigQueueConfigList" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.get"></a>

```typescript
public get(index: number): ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectQuickConnectConfigQueueConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>[]

---


### ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowIdInput">contactFlowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueIdInput">queueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactFlowIdInput`<sup>Optional</sup> <a name="contactFlowIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowIdInput"></a>

```typescript
public readonly contactFlowIdInput: string;
```

- *Type:* string

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueIdInput"></a>

```typescript
public readonly queueIdInput: string;
```

- *Type:* string

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectQuickConnectQuickConnectConfigQueueConfig | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a> | cdktf.IResolvable

---


### ConnectQuickConnectQuickConnectConfigUserConfigList <a name="ConnectQuickConnectQuickConnectConfigUserConfigList" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.get"></a>

```typescript
public get(index: number): ConnectQuickConnectQuickConnectConfigUserConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectQuickConnectConfigUserConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>[]

---


### ConnectQuickConnectQuickConnectConfigUserConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigUserConfigOutputReference" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktf/provider-aws'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowIdInput">contactFlowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactFlowIdInput`<sup>Optional</sup> <a name="contactFlowIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowIdInput"></a>

```typescript
public readonly contactFlowIdInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectQuickConnectQuickConnectConfigUserConfig | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a> | cdktf.IResolvable

---



