# `apprunnerVpcIngressConnection` Submodule <a name="`apprunnerVpcIngressConnection` Submodule" id="@cdktf/provider-aws.apprunnerVpcIngressConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerVpcIngressConnection <a name="ApprunnerVpcIngressConnection" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection aws_apprunner_vpc_ingress_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer"></a>

```typescript
import { apprunnerVpcIngressConnection } from '@cdktf/provider-aws'

new apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection(scope: Construct, id: string, config: ApprunnerVpcIngressConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig">ApprunnerVpcIngressConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig">ApprunnerVpcIngressConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration">putIngressVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIngressVpcConfiguration` <a name="putIngressVpcConfiguration" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration"></a>

```typescript
public putIngressVpcConfiguration(value: ApprunnerVpcIngressConnectionIngressVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct"></a>

```typescript
import { apprunnerVpcIngressConnection } from '@cdktf/provider-aws'

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement"></a>

```typescript
import { apprunnerVpcIngressConnection } from '@cdktf/provider-aws'

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource"></a>

```typescript
import { apprunnerVpcIngressConnection } from '@cdktf/provider-aws'

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfiguration">ingressVpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference">ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfigurationInput">ingressVpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArnInput">serviceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArn">serviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ingressVpcConfiguration`<sup>Required</sup> <a name="ingressVpcConfiguration" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfiguration"></a>

```typescript
public readonly ingressVpcConfiguration: ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference">ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressVpcConfigurationInput`<sup>Optional</sup> <a name="ingressVpcConfigurationInput" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfigurationInput"></a>

```typescript
public readonly ingressVpcConfigurationInput: ApprunnerVpcIngressConnectionIngressVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceArnInput`<sup>Optional</sup> <a name="serviceArnInput" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArnInput"></a>

```typescript
public readonly serviceArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerVpcIngressConnectionConfig <a name="ApprunnerVpcIngressConnectionConfig" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.Initializer"></a>

```typescript
import { apprunnerVpcIngressConnection } from '@cdktf/provider-aws'

const apprunnerVpcIngressConnectionConfig: apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.ingressVpcConfiguration">ingressVpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | ingress_vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#name ApprunnerVpcIngressConnection#name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.serviceArn">serviceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#id ApprunnerVpcIngressConnection#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#tags_all ApprunnerVpcIngressConnection#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ingressVpcConfiguration`<sup>Required</sup> <a name="ingressVpcConfiguration" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.ingressVpcConfiguration"></a>

```typescript
public readonly ingressVpcConfiguration: ApprunnerVpcIngressConnectionIngressVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

ingress_vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#ingress_vpc_configuration ApprunnerVpcIngressConnection#ingress_vpc_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#name ApprunnerVpcIngressConnection#name}.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#id ApprunnerVpcIngressConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#tags_all ApprunnerVpcIngressConnection#tags_all}.

---

### ApprunnerVpcIngressConnectionIngressVpcConfiguration <a name="ApprunnerVpcIngressConnectionIngressVpcConfiguration" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.Initializer"></a>

```typescript
import { apprunnerVpcIngressConnection } from '@cdktf/provider-aws'

const apprunnerVpcIngressConnectionIngressVpcConfiguration: apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#vpc_endpoint_id ApprunnerVpcIngressConnection#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#vpc_id ApprunnerVpcIngressConnection#vpc_id}. |

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#vpc_endpoint_id ApprunnerVpcIngressConnection#vpc_endpoint_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_vpc_ingress_connection#vpc_id ApprunnerVpcIngressConnection#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference <a name="ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { apprunnerVpcIngressConnection } from '@cdktf/provider-aws'

new apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApprunnerVpcIngressConnectionIngressVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

---



