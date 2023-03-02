# `grafanaWorkspaceApiKey` Submodule <a name="`grafanaWorkspaceApiKey` Submodule" id="@cdktf/provider-aws.grafanaWorkspaceApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceApiKey <a name="GrafanaWorkspaceApiKey" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key aws_grafana_workspace_api_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.Initializer"></a>

```typescript
import { grafanaWorkspaceApiKey } from '@cdktf/provider-aws'

new grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey(scope: Construct, id: string, config: GrafanaWorkspaceApiKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig">GrafanaWorkspaceApiKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig">GrafanaWorkspaceApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isConstruct"></a>

```typescript
import { grafanaWorkspaceApiKey } from '@cdktf/provider-aws'

grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isTerraformElement"></a>

```typescript
import { grafanaWorkspaceApiKey } from '@cdktf/provider-aws'

grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isTerraformResource"></a>

```typescript
import { grafanaWorkspaceApiKey } from '@cdktf/provider-aws'

grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.keyRoleInput">keyRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.secondsToLiveInput">secondsToLiveInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.keyRole">keyRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.secondsToLive">secondsToLive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyRoleInput`<sup>Optional</sup> <a name="keyRoleInput" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.keyRoleInput"></a>

```typescript
public readonly keyRoleInput: string;
```

- *Type:* string

---

##### `secondsToLiveInput`<sup>Optional</sup> <a name="secondsToLiveInput" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.secondsToLiveInput"></a>

```typescript
public readonly secondsToLiveInput: number;
```

- *Type:* number

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyRole`<sup>Required</sup> <a name="keyRole" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.keyRole"></a>

```typescript
public readonly keyRole: string;
```

- *Type:* string

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.secondsToLive"></a>

```typescript
public readonly secondsToLive: number;
```

- *Type:* number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceApiKeyConfig <a name="GrafanaWorkspaceApiKeyConfig" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.Initializer"></a>

```typescript
import { grafanaWorkspaceApiKey } from '@cdktf/provider-aws'

const grafanaWorkspaceApiKeyConfig: grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#key_name GrafanaWorkspaceApiKey#key_name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.keyRole">keyRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#key_role GrafanaWorkspaceApiKey#key_role}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.secondsToLive">secondsToLive</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#seconds_to_live GrafanaWorkspaceApiKey#seconds_to_live}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#workspace_id GrafanaWorkspaceApiKey#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#id GrafanaWorkspaceApiKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#key_name GrafanaWorkspaceApiKey#key_name}.

---

##### `keyRole`<sup>Required</sup> <a name="keyRole" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.keyRole"></a>

```typescript
public readonly keyRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#key_role GrafanaWorkspaceApiKey#key_role}.

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.secondsToLive"></a>

```typescript
public readonly secondsToLive: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#seconds_to_live GrafanaWorkspaceApiKey#seconds_to_live}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#workspace_id GrafanaWorkspaceApiKey#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceApiKey.GrafanaWorkspaceApiKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_api_key#id GrafanaWorkspaceApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



