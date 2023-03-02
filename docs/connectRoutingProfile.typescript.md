# `connectRoutingProfile` Submodule <a name="`connectRoutingProfile` Submodule" id="@cdktf/provider-aws.connectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectRoutingProfile <a name="ConnectRoutingProfile" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile aws_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

new connectRoutingProfile.ConnectRoutingProfile(scope: Construct, id: string, config: ConnectRoutingProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig">ConnectRoutingProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig">ConnectRoutingProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies">putMediaConcurrencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs">putQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs">resetQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMediaConcurrencies` <a name="putMediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies"></a>

```typescript
public putMediaConcurrencies(value: IResolvable | ConnectRoutingProfileMediaConcurrencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

---

##### `putQueueConfigs` <a name="putQueueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs"></a>

```typescript
public putQueueConfigs(value: IResolvable | ConnectRoutingProfileQueueConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQueueConfigs` <a name="resetQueueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs"></a>

```typescript
public resetQueueConfigs(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isConstruct"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

connectRoutingProfile.ConnectRoutingProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

connectRoutingProfile.ConnectRoutingProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

connectRoutingProfile.ConnectRoutingProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs">queueConfigs</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsAssociated">queueConfigsAssociated</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList">ConnectRoutingProfileQueueConfigsAssociatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileId">routingProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueIdInput">defaultOutboundQueueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput">mediaConcurrenciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput">queueConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueId">defaultOutboundQueueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies"></a>

```typescript
public readonly mediaConcurrencies: ConnectRoutingProfileMediaConcurrenciesList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `queueConfigs`<sup>Required</sup> <a name="queueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs"></a>

```typescript
public readonly queueConfigs: ConnectRoutingProfileQueueConfigsList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a>

---

##### `queueConfigsAssociated`<sup>Required</sup> <a name="queueConfigsAssociated" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsAssociated"></a>

```typescript
public readonly queueConfigsAssociated: ConnectRoutingProfileQueueConfigsAssociatedList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList">ConnectRoutingProfileQueueConfigsAssociatedList</a>

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileId"></a>

```typescript
public readonly routingProfileId: string;
```

- *Type:* string

---

##### `defaultOutboundQueueIdInput`<sup>Optional</sup> <a name="defaultOutboundQueueIdInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueIdInput"></a>

```typescript
public readonly defaultOutboundQueueIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `mediaConcurrenciesInput`<sup>Optional</sup> <a name="mediaConcurrenciesInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput"></a>

```typescript
public readonly mediaConcurrenciesInput: IResolvable | ConnectRoutingProfileMediaConcurrencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queueConfigsInput`<sup>Optional</sup> <a name="queueConfigsInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput"></a>

```typescript
public readonly queueConfigsInput: IResolvable | ConnectRoutingProfileQueueConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="defaultOutboundQueueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueId"></a>

```typescript
public readonly defaultOutboundQueueId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectRoutingProfileConfig <a name="ConnectRoutingProfileConfig" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

const connectRoutingProfileConfig: connectRoutingProfile.ConnectRoutingProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueId">defaultOutboundQueueId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]</code> | media_concurrencies block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs">queueConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]</code> | queue_configs block. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="defaultOutboundQueueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueId"></a>

```typescript
public readonly defaultOutboundQueueId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}.

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies"></a>

```typescript
public readonly mediaConcurrencies: IResolvable | ConnectRoutingProfileMediaConcurrencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

media_concurrencies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#id ConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queueConfigs`<sup>Optional</sup> <a name="queueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs"></a>

```typescript
public readonly queueConfigs: IResolvable | ConnectRoutingProfileQueueConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

queue_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}.

---

### ConnectRoutingProfileMediaConcurrencies <a name="ConnectRoutingProfileMediaConcurrencies" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

const connectRoutingProfileMediaConcurrencies: connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel">channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency">concurrency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}.

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}.

---

### ConnectRoutingProfileQueueConfigs <a name="ConnectRoutingProfileQueueConfigs" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

const connectRoutingProfileQueueConfigs: connectRoutingProfile.ConnectRoutingProfileQueueConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.channel">channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay">delay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#delay ConnectRoutingProfile#delay}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#priority ConnectRoutingProfile#priority}. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueId">queueId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_id ConnectRoutingProfile#queue_id}. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}.

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#delay ConnectRoutingProfile#delay}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#priority ConnectRoutingProfile#priority}.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_id ConnectRoutingProfile#queue_id}.

---

### ConnectRoutingProfileQueueConfigsAssociated <a name="ConnectRoutingProfileQueueConfigsAssociated" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

const connectRoutingProfileQueueConfigsAssociated: connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ConnectRoutingProfileMediaConcurrenciesList <a name="ConnectRoutingProfileMediaConcurrenciesList" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

new connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get"></a>

```typescript
public get(index: number): ConnectRoutingProfileMediaConcurrenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileMediaConcurrencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

---


### ConnectRoutingProfileMediaConcurrenciesOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

new connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput">concurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">concurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `concurrencyInput`<sup>Optional</sup> <a name="concurrencyInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput"></a>

```typescript
public readonly concurrencyInput: number;
```

- *Type:* number

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectRoutingProfileMediaConcurrencies | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a> | cdktf.IResolvable

---


### ConnectRoutingProfileQueueConfigsAssociatedList <a name="ConnectRoutingProfileQueueConfigsAssociatedList" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

new connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.get"></a>

```typescript
public get(index: number): ConnectRoutingProfileQueueConfigsAssociatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ConnectRoutingProfileQueueConfigsAssociatedOutputReference <a name="ConnectRoutingProfileQueueConfigsAssociatedOutputReference" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

new connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated">ConnectRoutingProfileQueueConfigsAssociated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociatedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectRoutingProfileQueueConfigsAssociated;
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsAssociated">ConnectRoutingProfileQueueConfigsAssociated</a>

---


### ConnectRoutingProfileQueueConfigsList <a name="ConnectRoutingProfileQueueConfigsList" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

new connectRoutingProfile.ConnectRoutingProfileQueueConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get"></a>

```typescript
public get(index: number): ConnectRoutingProfileQueueConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileQueueConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

---


### ConnectRoutingProfileQueueConfigsOutputReference <a name="ConnectRoutingProfileQueueConfigsOutputReference" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktf/provider-aws'

new connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput">delayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueIdInput">queueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueIdInput"></a>

```typescript
public readonly queueIdInput: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectRoutingProfileQueueConfigs | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a> | cdktf.IResolvable

---



